import { LovelaceCardConfig } from 'custom-card-helpers';

export interface WeatherCardConfig extends LovelaceCardConfig {
  entity?: string;
  name?: string;
  type: string;
}
