import { LovelaceCardConfig } from 'custom-card-helpers';
import { HassEntityAttributeBase, HassEntityBase } from 'home-assistant-js-websocket';
import { WeatherCondition } from '../enums/weather-condition';

export interface WeatherCardConfig extends LovelaceCardConfig {
  current?: boolean;
  details?: boolean;
  entity: string;
  forecast?: boolean;
  hide_precipitation?: boolean;
  hourly_forecast?: boolean;
  name?: string;
  number_of_forecasts?: number;
}

export type WeatherEntity = HassEntityBase & {
  attributes: WeatherEntityAttribute;
};

export type WeatherEntityAttribute = HassEntityAttributeBase &
  WeatherForecastBase & {
    forecast: Readonly<Array<WeatherForecast>>;
    humidity: number;
    pressure: number;
  };

export type WeatherForecast = WeatherForecastBase & {
  condition: WeatherCondition;
  datetime: string;
  precipitation: number;
  templow: number;
};

type WeatherForecastBase = {
  temperature: number;
  wind_bearing: number;
  wind_speed: number;
};
