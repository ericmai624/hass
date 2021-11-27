import { HomeAssistant } from 'custom-card-helpers';

export type Measure = keyof HomeAssistant['config']['unit_system'];
