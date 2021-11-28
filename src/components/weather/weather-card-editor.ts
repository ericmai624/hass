import { computeDomain, fireEvent, HomeAssistant } from 'custom-card-helpers';
import { css, html, HTMLTemplateResult, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { WeatherCardConfig } from './types/weather.type';
import { WEATHER_DOMAIN } from './weather-consts';

const NAME = 'weather-card-editor';

@customElement(NAME)
export class WeatherCardEditor extends LitElement {
  @state() private config?: WeatherCardConfig;
  @property() public hass!: HomeAssistant;

  static get styles() {
    return css`
      .switches {
        margin: 8px 0;
        display: flex;
        justify-content: space-between;
      }
      .switch {
        display: flex;
        align-items: center;
        justify-items: center;
      }
      .switches span {
        padding: 0 16px;
      }
    `;
  }

  public setConfig(config: WeatherCardConfig): void {
    this.config = { ...config };
  }

  protected render(): HTMLTemplateResult {
    const hass = this.hass;
    if (!hass) {
      return html``;
    }
    const {
      current = true,
      entity = '',
      forecast,
      hourly_forecast: hourlyForecast,
      name = '',
      number_of_forecasts: numOfForecast = 5,
    } = this.config ?? {};
    const entityIDs = Object.keys(hass.states).filter(
      (entityID: EntityID): boolean => computeDomain(entityID) === WEATHER_DOMAIN,
    );
    return html`
      <div class="card-config">
        <div>
          <paper-input label="Name" .value="${name}" @value-changed="${this.handleChange('name')}"></paper-input>
          ${customElements.get('ha-entity-picker')
            ? html`
                <ha-entity-picker
                  .hass="${hass}"
                  .value="${entity}"
                  .includeDomains=${[WEATHER_DOMAIN]}
                  @change="${this.handleChange('entity')}"
                >
                </ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu label="Entity" @value-changed="${this.handleChange('entity')}">
                  <paper-listbox slot="dropdown-content" .selected="${entityIDs.indexOf(entity)}">
                    ${entityIDs.map(
                      (entityID: EntityID): HTMLTemplateResult => html` <paper-item>${entityID}</paper-item> `,
                    )}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          <div class="switches">
            <div class="switch">
              <ha-switch .checked=${current} @change="${this.handleChange('current')}"></ha-switch
              ><span>Show current</span>
            </div>
            <div class="switch">
              <ha-switch .checked=${forecast} @change="${this.handleChange('forecast')}"></ha-switch
              ><span>Show forecast</span>
            </div>
            <div class="switch">
              <ha-switch .checked=${hourlyForecast} @change="${this.handleChange('hourly_forecast')}"></ha-switch
              ><span>Show hourly forecast</span>
            </div>
          </div>
          <paper-input
            label="Number of future forcasts"
            type="number"
            min="1"
            max="5"
            value=${numOfForecast}
            @value-changed="${this.handleChange('number_of_forecasts')}"
          ></paper-input>
        </div>
      </div>
    `;
  }

  private handleChange(field: string): (e: InputEvent) => void {
    return (e) => {
      const config = this.config;
      if (config == null || this.hass == null) {
        return;
      }
      const target = e.target as HTMLInputElement | undefined | null;
      if (target == null) {
        return;
      }
      const nextConfig = { ...config };
      const val: boolean | string = target.checked ?? target.value;
      if (typeof val === 'string' && val === '') {
        delete nextConfig[field];
      } else {
        nextConfig[field] = val;
      }
      fireEvent(this, 'config-changed', { config: nextConfig });
    };
  }
}
