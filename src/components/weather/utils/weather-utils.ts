import { computeDomain } from 'custom-card-helpers';
import { SVGTemplateResult } from 'lit';
import { SunState } from '../../sun/sun-enums';
import Cloudy from '../icons/cloudy';
import CloudyDay3 from '../icons/cloudy-day-3';
import CloudyNight3 from '../icons/cloudy-night-3';
import Day from '../icons/day';
import Night from '../icons/night';
import Rainy5 from '../icons/rainy-5';
import Rainy6 from '../icons/rainy-6';
import Rainy7 from '../icons/rainy-7';
import Snowy6 from '../icons/snowy-6';
import Thunder from '../icons/thunder';
import { WEATHER_DOMAIN } from '../weather-consts';
import { WeatherCondition } from '../weather-enums';

export function getConditionIcon(condition: WeatherCondition, sunState: SunState | null): SVGTemplateResult | void {
  switch (condition) {
    case WeatherCondition.Clear:
    case WeatherCondition.Sunny:
      return sunState === SunState.BelowHorizon ? Night : Day;
    case WeatherCondition.ClearNight:
      return Night;
    case WeatherCondition.Cloudy:
    case WeatherCondition.Fog:
    case WeatherCondition.Windy:
      return Cloudy;
    case WeatherCondition.Hail:
    case WeatherCondition.SnowyRainy:
      return Rainy7;
    case WeatherCondition.Lightning:
    case WeatherCondition.LightningRainy:
      return Thunder;
    case WeatherCondition.PartlyCloudy:
    case WeatherCondition.WindyVariant:
      return sunState === SunState.BelowHorizon ? CloudyNight3 : CloudyDay3;
    case WeatherCondition.Pouring:
      return Rainy6;
    case WeatherCondition.Rainy:
      return Rainy5;
    case WeatherCondition.Snowy:
      return Snowy6;
  }
}

export function isWeatherDomain(entityID: EntityID): boolean {
  return computeDomain(entityID) === WEATHER_DOMAIN;
}
