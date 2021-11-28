import { HomeAssistant } from 'custom-card-helpers';

export type Measure = keyof HomeAssistant['config']['unit_system'];

export interface CustomCard {
    type: string;
    name: string;
    description: string;
    preview?: boolean;
  }