import { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import {Measure} from '../types/hass'

export function getEntity<T extends HassEntity>(hass: HomeAssistant, entityID: EntityID): T {
  return hass.states[entityID] as T;
}

export function getUnit(hass: HomeAssistant, measure: Measure): string {
  return hass.config.unit_system[measure];
}
