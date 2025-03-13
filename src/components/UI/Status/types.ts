export type StatusVariant = "live" | "finished" | "preparing";

export type Variants = {
  [key in StatusVariant]: {
    text: string;
    className: string;
  };
};