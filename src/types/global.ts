import { WeatherCard } from '../components/weather/weather-card';
import { CustomCard } from './hass';

declare global {
  interface Window {
    customCards: Array<CustomCard>;
  }
  interface HTMLElementTagNameMap {
    'weather-card': WeatherCard;
  }
  type EntityID = string;
}
