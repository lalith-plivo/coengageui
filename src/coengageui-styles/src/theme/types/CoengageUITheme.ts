import type { CSSProperties } from 'react';
import type { CoengageUISizes, CoengageUISize, CoengageUINumberSize } from './CoengageUISize';
import type { DeepPartial } from './DeepPartial';
import type { CoengageUIThemeColors } from './CoengageUIColor';
import type { VariantInput, VariantOutput } from '../functions/fns/variant/variant';
import type { ColorScheme } from './ColorScheme';
import { CSSObject } from '../../tss';

export type LoaderType = 'bars' | 'oval' | 'dots';
export type CoengageUIThemeOther = Record<string, any>;

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface CoengageUIPrimaryShade {
  light: Shade;
  dark: Shade;
}

interface CoengageUIThemeFunctions {
  fontStyles(): any;
  focusStyles(): any;
  cover(offset?: number | string): any;
  themeColor(color: string, shade: number, primaryFallback?: boolean): string;
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: CoengageUINumberSize): string;
  largerThan(breakpoint: CoengageUINumberSize): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size: CoengageUINumberSize | (string & {})): string | number;
  variant(payload: VariantInput): VariantOutput;
  primaryShade(colorScheme?: ColorScheme): Shade;
  hover(hoverStyle: CSSObject): any;
}

export interface CoengageUITheme {
  dir: 'ltr' | 'rtl';
  primaryShade: Shade | CoengageUIPrimaryShade;
  focusRing: 'auto' | 'always' | 'never';
  defaultRadius: CoengageUINumberSize | (string & {});
  loader: LoaderType;
  dateFormat: string;
  colorScheme: ColorScheme;
  white: string;
  black: string;
  colors: CoengageUIThemeColors;
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: keyof CoengageUIThemeColors;

  fontSizes: CoengageUISizes;
  btnFontSizes: CoengageUISizes;
  radius: CoengageUISizes;
  spacing: CoengageUISizes;
  breakpoints: CoengageUISizes;
  shadows: Record<CoengageUISize, string>;

  headings: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  fn: CoengageUIThemeFunctions;
  other: CoengageUIThemeOther;

  datesLocale: string;
  typography_light: string;
  typograhy_regular: string;
  typograhy_dark: string;
}

export type CoengageUIThemeBase = Omit<CoengageUITheme, 'fn'>;
export type CoengageUIThemeOverride = DeepPartial<Omit<CoengageUIThemeBase, 'fn' | 'other'>> & {
  other?: CoengageUIThemeOther;
};
