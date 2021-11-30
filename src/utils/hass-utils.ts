import { HomeAssistant } from 'custom-card-helpers';
import { HassEntity } from 'home-assistant-js-websocket';
import { CustomCard, Measure } from '../types/hass';

export function getEntity<T extends HassEntity>(hass: HomeAssistant, entityID: EntityID): T | null {
  const entity = hass.states[entityID];
  return entity == null ? null : (entity as T);
}

export function getxEntity<T extends HassEntity>(hass: HomeAssistant, entityID: EntityID): T {
  const entity = getEntity(hass, entityID);
  if (entity == null) {
    throw new Error(`Unexpected null when trying to get ${entityID} from Home Assistant object`);
  }
  return entity as T;
}

export function getEntityState<T extends string | number>(entity: HassEntity): T {
  return entity.state as T;
}

export function getUnit(hass: HomeAssistant, measure: Measure): string {
  return hass.config.unit_system[measure];
}

export function addCustomCard(customCard: CustomCard): void {
  window.customCards = window.customCards ?? [];
  const existingCardIndex = window.customCards.findIndex((card: CustomCard): boolean => card.type === customCard.type);
  if (existingCardIndex === -1) {
    window.customCards.push(customCard);
  } else {
    window.customCards[existingCardIndex] = customCard;
  }
}
