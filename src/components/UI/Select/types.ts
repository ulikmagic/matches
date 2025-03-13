interface Option {
  value: string | number;
  label: string;
}

export interface SelectProps {
  options: Option[];
}