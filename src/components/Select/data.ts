export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'venue', label: 'Venue', color: '#F74E37' },
  { value: 'catering', label: 'Catering', color: '#F74E37' },
];

export interface FlavourOption {
  readonly value: string;
  readonly label: string;
  readonly rating: string;
}
