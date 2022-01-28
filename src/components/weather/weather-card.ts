import {
  computeStateDisplay,
  fireEvent,
  hasConfigOrEntityChanged,
  HomeAssistant,
  NumberFormat,
  TimeFormat,
} from 'custom-card-helpers';
import { html, HTMLTemplateResult, LitElement, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { Measure } from '../../types/hass';
import { addCustomCard, getEntity, getEntityState, getUnit, getxEntity } from '../../utils/hass-utils';
import { SUN_ENTITY_ID } from '../sun/sun-consts';
import { SunState } from '../sun/sun-enums';
import { SunEntity } from '../sun/types/sun.type';
import { WeatherCardConfig, WeatherEntity, WeatherForecast } from './types/weather.type';
import { getConditionIcon, isWeatherDomain } from './utils/weather-utils';
import './weather-card-editor';
import WeatherCardStyle from './weather-card-style';
import { WEATHER_CARD_NAME } from './weather-consts';
import { WeatherCondition } from './weather-enums';

@customElement(WEATHER_CARD_NAME)
export class WeatherCard extends LitElement {
  @state() private config!: WeatherCardConfig;
  @property() public hass!: HomeAssistant;

  static styles = WeatherCardStyle;

  static getStubConfig(
    _hass: HomeAssistant,
    unusedEntities: Readonly<Array<EntityID>>,
    allEntities: Readonly<Array<EntityID>>,
  ): { entity: EntityID } {
    const entity = unusedEntities.find(isWeatherDomain) ?? allEntities.find(isWeatherDomain);
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
    if (entity == null) {
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
    const hass = this.hass;
    const { current, name } = this.config;
    const {
      locale = { language: hass.language, number_format: NumberFormat.system, time_format: TimeFormat.system },
      localize,
    } = hass;
    const {
      attributes: { humidity, temperature },
    } = entity;
    const sunState = getEntityState<SunState>(getxEntity(hass, SUN_ENTITY_ID));
    const weatherState = getEntityState<WeatherCondition>(entity);
    const tempUnit = this.getUnit('temperature');
    const isCurrentDisabled = current === false;
    if (isCurrentDisabled) {
      return html``;
    }
    return html`<div class="grid grid-align-center current">
      <div class="flex-no-shrink icon">${getConditionIcon(weatherState, sunState)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${computeStateDisplay(localize, entity, locale, weatherState)}</div>
        <div class="subtitle secondary-text">${name ?? 'Home'}</div>
      </div>
      <div class="flex flex-column right-content">
        <div class="flex">
          <span class="temperature">${Math.round(temperature)}</span>
          <span class="unit">${tempUnit}</span>
        </div>
        <div class="flex flex-align-center secondary-text">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${humidity}<span> % </span>
        </div>
      </div>
    </div>`;
  }

  private renderForecasts({ attributes }: WeatherEntity): HTMLTemplateResult {
    const {
      forecast: isForecastEnabled = false,
      hourly_forecast: isHourlyForecast,
      number_of_forecasts: numOfForecasts = 5,
    } = this.config;
    if (!isForecastEnabled) {
      return html``;
    }
    const hass = this.hass;
    const language = hass.locale?.language ?? hass.selectedLanguage;
    const {
      attributes: { next_dawn: nextDawn, next_dusk: nextDusk },
    } = getxEntity<SunEntity>(hass, SUN_ENTITY_ID);
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = isHourlyForecast
      ? { hour: '2-digit' }
      : { weekday: 'short' };
    const forecastEntries = attributes.forecast
      .slice(0, numOfForecasts)
      .map(({ condition, datetime, temperature, templow }: WeatherForecast, index: number): HTMLTemplateResult => {
        const forecastDateTime = new Date(datetime);
        return html`<div class="flex flex-column forecast">
          <div>
            ${index === 0 && !isHourlyForecast
              ? 'Today'
              : forecastDateTime.toLocaleString(language, dateTimeFormatOptions).replace(/^0/, '').replace(' ', '')}
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

addCustomCard({
  type: WEATHER_CARD_NAME,
  name: 'custom-weather-card',
  description: 'A custom weather card with animated SVG icons',
  preview: true,
});
