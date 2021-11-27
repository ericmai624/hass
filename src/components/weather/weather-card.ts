import { hasConfigOrEntityChanged, HomeAssistant } from 'custom-card-helpers';
import { html, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { Measure } from '../../types/hass';
import { getEntity, getEntityState, getUnit } from '../../utils/hass-utils';
import { WeatherCondition } from './enums/weather-condition';
import style from './style';
import { WeatherCardConfig, WeatherEntity } from './types/weather-card.type';
import { getConditionFriendlyName, getConditionIcon } from './utils/weather-utils';
import './weather-card-editor';

const NAME = 'weather-card';

@customElement(NAME)
export class WeatherCard extends LitElement {
  @state() private config!: WeatherCardConfig;
  @property() public hass!: HomeAssistant;

  static styles = style;

  static getStubConfig(
    _hass: HomeAssistant,
    unusedEntities: Readonly<Array<EntityID>>,
    allEntities: Readonly<Array<EntityID>>,
  ): { entity: EntityID } {
    let entity = unusedEntities.find((entityID: EntityID): boolean => entityID.split('.')[0] === 'weather');
    if (!entity) {
      entity = allEntities.find((entityID: EntityID): boolean => entityID.split('.')[0] === 'weather');
    }
    return { entity: entity as EntityID };
  }

  static async getConfigElement() {
    return document.createElement('weather-card-editor');
  }

  public setConfig(config: WeatherCardConfig): void {
    if (!config.entity) {
      throw new Error('Please define a weather entity');
    }
    this.config = config;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): HTMLTemplateResult {
    const entityID = this.config.entity;
    const entity = getEntity<WeatherEntity>(this.hass, entityID);
    if (!entity) {
      return html`
        <ha-card>
          <div class="not-found">Entity not available: ${entityID}</div>
        </ha-card>
      `;
    }
    return html`<ha-card> ${this.renderCurrent(entity)} </ha-card>`;
  }

  private renderCurrent(entity: WeatherEntity): HTMLTemplateResult {
    const { current, name } = this.config;
    const {
      attributes: { temperature },
    } = entity;
    const state = getEntityState<WeatherCondition>(entity);
    const tempUnit = this.getUnit('temperature');
    const isDisabled = current === false;
    if (isDisabled) {
      return html``;
    }
    return html`<div class="weather-current">
      <div class="icon">${getConditionIcon(state)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${getConditionFriendlyName(state)}</div>
        <div class="subtitle">${name}</div>
      </div>
      <div class="flex flex-column right-content">
        <div class="flex">
          <span class="temperature">${temperature}</span>
          <span class="unit">${tempUnit}</span>
        </div>
      </div>
    </div>`;
  }

  private getUnit(measure: 'air_pressure' | 'precipitation' | 'precipitation_probability' | Measure): string {
    const hass = this.hass;
    const isMetric = getUnit(hass, 'length') === 'km';
    switch (measure) {
      case 'air_pressure':
        return isMetric ? 'hPa' : 'inHg';
      case 'precipitation':
        return isMetric ? 'mm' : 'in';
      case 'precipitation_probability':
        return '%';
      default:
        return getUnit(hass, measure);
    }
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: NAME,
  name: 'Weather Card',
  description: 'A custom weather card with animated icons',
});
