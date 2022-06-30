import { Tuple } from './Tuple';

export type DefaultCoengageUIColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});

export type CoengageUIThemeColorsOverride = {};

export type CoengageUIThemeColors = CoengageUIThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, number>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultCoengageUIColor, Tuple<string, 10>>;

export type CoengageUIColor = keyof CoengageUIThemeColors;
