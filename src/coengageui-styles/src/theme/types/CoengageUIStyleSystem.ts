import type { CoengageUINumberSize } from './CoengageUISize';

type CoengageUIStyleSystemValue = CoengageUINumberSize | (string & {});

export interface CoengageUIStyleSystemProps {
  m?: CoengageUIStyleSystemValue;
  my?: CoengageUIStyleSystemValue;
  mx?: CoengageUIStyleSystemValue;
  mt?: CoengageUIStyleSystemValue;
  mb?: CoengageUIStyleSystemValue;
  ml?: CoengageUIStyleSystemValue;
  mr?: CoengageUIStyleSystemValue;

  p?: CoengageUIStyleSystemValue;
  py?: CoengageUIStyleSystemValue;
  px?: CoengageUIStyleSystemValue;
  pt?: CoengageUIStyleSystemValue;
  pb?: CoengageUIStyleSystemValue;
  pl?: CoengageUIStyleSystemValue;
  pr?: CoengageUIStyleSystemValue;
}

export type CoengageUIStyleSystemSize = keyof CoengageUIStyleSystemProps;
