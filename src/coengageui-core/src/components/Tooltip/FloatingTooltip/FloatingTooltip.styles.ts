import { createStyles, CoengageUIColor, CoengageUINumberSize } from '@coengageui/styles';

export interface FloatingTooltipStylesParams {
  color: CoengageUIColor;
  radius: CoengageUINumberSize;
}

export default createStyles((theme, { color, radius }: FloatingTooltipStylesParams) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  body: {
    ...theme.fn.fontStyles(),
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 9),
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    borderRadius: theme.fn.radius(radius),
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
    position: 'absolute',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    pointerEvents: 'none',
  },
}));
