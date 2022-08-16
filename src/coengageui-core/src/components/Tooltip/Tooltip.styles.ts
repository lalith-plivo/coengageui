import { createStyles, CoengageUINumberSize } from 'coengageui_styles';

export interface TooltipStylesParams {
  variant: 'light' | 'dark';
  radius: CoengageUINumberSize;
}

export default createStyles((theme, { variant, radius }: TooltipStylesParams) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  body: {
    ...theme.fn.fontStyles(),
    backgroundColor: variant === 'light' ? `${theme.white}` : `${theme.black}`,
    boxShadow: variant === 'light' ? `${theme.shadows.sm}` : 'none',
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    padding: '6px 12px',
    color: variant === 'light' ? `${theme.black}` : `${theme.white}`,
    position: 'relative',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 500,
    borderRadius: theme.fn.radius(radius),
  },

  arrow: {
    border: 0,
    background: variant === 'light' ? `${theme.white}` : `${theme.black}`,
    boxShadow: variant === 'light' ? `${theme.shadows.sm}` : 'none',
    zIndex: 1,
  },
}));
