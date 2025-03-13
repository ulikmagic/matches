export interface OptionType {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: OptionType[];
}