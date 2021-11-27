import { WeatherCard } from '../components/weather/weather-card';

interface CustomCard {
  type: string;
  name: string;
  description: string;
}

declare global {
  interface Window {
    customCards: Array<CustomCard>;
  }
  interface HTMLElementTagNameMap {
    'weather-card': WeatherCard;
  }
  type EntityID = string;
}

export {};
