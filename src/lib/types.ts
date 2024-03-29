export type Square = {
  id: number;
  i: number;
  key: number;
  columns: number;
  rows: number;
};

export type OnProgress = (params: number) => void;
export type OnScroll = (scrollTop: number) => void;
export interface Layer {
  frame: HTMLDivElement;
  setPosition: (scrollTop: number, sectionHeight: number, disabled: boolean) => void;
}

export interface LayerProps {
  rate: number;
  offset: number;
  bgSpeed: number;
}

export type Config = { stiffness: number; damping: number };
export type Threshold = { top: number; bottom: number };
