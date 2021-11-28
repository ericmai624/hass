import { HassEntityAttributeBase, HassEntityBase } from 'home-assistant-js-websocket';

export type SunEntity = HassEntityBase & {
  attributes: SunEntityAttribute;
};

export type SunEntityAttribute = HassEntityAttributeBase & {
  azimuth: number;
  elevation: number;
  next_dawn: string;
  next_dusk: string;
  next_midnight: string;
  next_noon: string;
  next_rising: string;
  next_setting: string;
  rising: boolean;
};
