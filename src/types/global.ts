interface CustomCard {
  type: string;
  name: string;
  description: string;
}

declare global {
  interface Window {
    customCards: Array<CustomCard>;
  }
}

export {}