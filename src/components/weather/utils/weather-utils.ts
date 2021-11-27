import { SVGTemplateResult } from 'lit';
import { WeatherCondition } from '../enums/weather-condition';
import Cloudy from '../icons/cloudy';
import CloudyDay3 from '../icons/cloudy-day-3';
import Day from '../icons/day';
import Night from '../icons/night';
import Rainy5 from '../icons/rainy-5';
import Rainy6 from '../icons/rainy-6';
import Rainy7 from '../icons/rainy-7';
import Snowy6 from '../icons/snowy-6';
import Thunder from '../icons/thunder';

export function getConditionIcon(condition: WeatherCondition): SVGTemplateResult | void {
  switch (condition) {
    case WeatherCondition.Clear:
    case WeatherCondition.Sunny:
      return Day;
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
      return CloudyDay3;
    case WeatherCondition.Pouring:
      return Rainy6;
    case WeatherCondition.Rainy:
      return Rainy5;
    case WeatherCondition.Snowy:
      return Snowy6;
  }
}

export function getConditionFriendlyName(condition: WeatherCondition): string {
  return condition
    .split('-')
    .map((word) => word.replace(/^\w/, (s) => s.toUpperCase()))
    .join(' ');
}
