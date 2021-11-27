import { hasConfigOrEntityChanged, HomeAssistant } from 'custom-card-helpers';
import { CSSResult, html, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import style from './style';
import { WeatherCardConfig } from './types/weather-card.type';

const NAME = 'weather-card';

@customElement(NAME)
export class WeatherCard extends LitElement {
  @state() private config!: WeatherCardConfig;
  @property() public hass!: HomeAssistant;

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

  static get styles(): CSSResult {
    return style;
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
    const entity = this.config.entity;
    const entityState = this.hass.states[entity];
    if (!entityState) {
      return html`
        <ha-card>
          <div class="not-found">Entity not available: ${entity}</div>
        </ha-card>
      `;
    }
    return html`<ha-card>hello world</ha-card>`;
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: NAME,
  name: 'Weather Card',
  description: 'A custom weather card with animated icons',
});
