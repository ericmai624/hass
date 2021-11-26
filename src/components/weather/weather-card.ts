import { LitElement } from 'lit';
import { customElement, state } from 'lit/decorators';
import { WeatherCardConfig } from './types/weather-card';

const NAME = 'weather-card';

@customElement(NAME)
export class WeatherCard extends LitElement {
  @state() private config!: WeatherCardConfig;

  public setConfig(config: WeatherCardConfig): void {
    this.config = config;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: NAME,
  name: 'Weather Card',
  description: 'A custom weather card with animated icons',
});
