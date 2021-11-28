import { computeDomain, fireEvent, hasConfigOrEntityChanged, HomeAssistant } from 'custom-card-helpers';
import { html, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { Measure } from '../../types/hass';
import { getEntity, getEntityState, getUnit } from '../../utils/hass-utils';
import { SUN_ENTITY_ID } from '../sun/sun-consts';
import { SunState } from '../sun/sun-enums';
import { SunEntity } from '../sun/types/sun.type';
import style from './style';
import { WeatherCardConfig, WeatherEntity, WeatherForecast } from './types/weather.type';
import { getConditionFriendlyName, getConditionIcon } from './utils/weather-utils';
import './weather-card-editor';
import { WEATHER_DOMAIN } from './weather-consts';
import { WeatherCondition } from './weather-enums';

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
    let entity = unusedEntities.find((entityID: EntityID): boolean => computeDomain(entityID) === WEATHER_DOMAIN);
    if (!entity) {
      entity = allEntities.find((entityID: EntityID): boolean => computeDomain(entityID) === WEATHER_DOMAIN);
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
    return html`<ha-card class="container" @click=${this.handleClick}>
      ${this.renderCurrent(entity)} ${this.renderForecasts(entity)}
    </ha-card>`;
  }

  private renderCurrent(entity: WeatherEntity): HTMLTemplateResult {
    const { current, name } = this.config;
    const {
      attributes: { temperature },
    } = entity;
    const sunState = getEntityState<SunState>(getEntity(this.hass, SUN_ENTITY_ID));
    const weatherState = getEntityState<WeatherCondition>(entity);
    const tempUnit = this.getUnit('temperature');
    const isDisabled = current === false;
    if (isDisabled) {
      return html``;
    }
    return html`<div class="grid grid-align-center current">
      <div class="flex-no-shrink icon">${getConditionIcon(weatherState, sunState)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${getConditionFriendlyName(weatherState)}</div>
        <div class="subtitle secondary-text">${name}</div>
      </div>
      <div class="flex flex-column right-content">
        <div class="flex">
          <span class="temperature">${Math.round(temperature)}</span>
          <span class="unit">${tempUnit}</span>
        </div>
        <div class="flex flex-align-center secondary-text">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${entity.attributes.humidity}<span> % </span>
        </div>
      </div>
    </div>`;
  }

  private renderForecasts(entity: WeatherEntity): HTMLTemplateResult {
    const {
      forecast: isEnabled = false,
      number_of_forecasts: numOfForecasts = 5,
      hourly_forecast: isHourlyForecast,
    } = this.config;
    if (!isEnabled) {
      return html``;
    }
    const hass = this.hass;
    const { locale } = hass;
    const {
      attributes: { next_dawn: nextDawn, next_dusk: nextDusk },
    } = getEntity<SunEntity>(hass, SUN_ENTITY_ID);
    const { language = 'en' } = locale ?? {};
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = isHourlyForecast
      ? { hour: '2-digit' }
      : { weekday: 'short' };
    const {
      attributes: { forecast },
    } = entity;
    const forecastEntries = forecast
      .slice(0, numOfForecasts)
      .map(({ condition, datetime, temperature, templow }: WeatherForecast): HTMLTemplateResult => {
        const forecastDateTime = new Date(datetime);
        return html`<div class="flex flex-column forecast">
          <div>
            ${forecastDateTime.toLocaleString(language, dateTimeFormatOptions).replace(/^0/, '').replace(' ', '')}
          </div>
          <div class="flex-no-shrink icon-small">
            ${getConditionIcon(
              condition,
              !isHourlyForecast
                ? null
                : forecastDateTime >= new Date(nextDusk) && forecastDateTime < new Date(nextDawn)
                ? SunState.BelowHorizon
                : SunState.AboveHorizon,
            )}
          </div>
          <span class="temp-high">${Math.round(temperature)}°</span>
          ${templow != null ? html`<span class="temp-low secondary-text">${Math.round(templow)}°</span>` : html``}
        </div>`;
      });
    return html` <div class="flex forecasts">${forecastEntries}</div> `;
  }

  private handleClick(): void {
    fireEvent(this, 'hass-more-info', { entityId: this.config.entity });
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
