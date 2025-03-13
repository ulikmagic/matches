import { ButtonHTMLAttributes } from "react";

export interface ButtonUpdateProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}