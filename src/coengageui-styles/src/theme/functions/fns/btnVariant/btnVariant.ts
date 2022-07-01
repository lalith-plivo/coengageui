import type { CoengageUIColor, CoengageUIThemeBase } from '../../../types';
import { rgba } from '../rgba/rgba';

export interface VariantInput {
  variant:
    | 'filled'
    | 'light'
    | 'outline'
    | 'default'
    | 'gradient'
    | 'white'
    | 'subtle'
    | 'info'
    | 'danger'
    | 'warning'
    | 'success';
  color?: CoengageUIColor;
  danger?: boolean;
}

export interface VariantOutput {
  border?: string;
  background?: string;
  color?: string;
  hover?: string;
}

export function btnVariant(theme: CoengageUIThemeBase) {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, danger }: VariantInput): VariantOutput => {
    if (variant === 'subtle') {
      return {
        border: danger ? theme.colors.danger[1] : 'transparent',
        background: danger ? theme.colors.danger[1] : theme.white,
        color: danger ? theme.white : theme.colors.info[1],
        hover: danger ? rgba(theme.colors.danger[1], 0.9) : theme.colors.brand[0],
      };
    }
    if (variant === 'outline') {
      return {
        border: danger ? theme.colors.danger[1] : theme.colors.info[1],
        background: theme.white,
        color: danger ? theme.colors.danger[1] : theme.colors.info[1],
        hover: danger ? theme.colors.danger[2] : theme.colors.brand[0],
      };
    }

    if (variant === 'filled') {
      return {
        border: 'transparent',
        background: danger ? theme.colors.danger[1] : theme.colors.info[1],
        color: theme.white,
        hover: danger ? rgba(theme.colors.danger[1], 0.9) : theme.colors.info[2],
      };
    }

    return {
      border: theme.colors.neutral[5],
      background: theme.white,
      color: theme.typograhy_dark,
      hover: theme.colors.neutral[6],
    };
  };
}
