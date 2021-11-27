import { LovelaceCardConfig } from 'custom-card-helpers';

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
