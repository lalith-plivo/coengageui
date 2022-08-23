import { createStyles, CoengageUINumberSize, CoengageUIColor } from 'coengageui_styles';

export interface DividerStylesParams {
  size: CoengageUINumberSize;
  variant: 'solid' | 'dashed' | 'dotted';
  color: CoengageUIColor;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export default createStyles((theme, { size, variant, color }: DividerStylesParams) => ({
  root: {},

  withLabel: {
    borderTop: '0 !important',
  },

  left: {
    '&::before': {
      display: 'none',
    },
  },

  right: {
    '&::after': {
      display: 'none',
    },
  },

  label: {
    display: 'flex',
    alignItems: 'center',

    '&::before': {
      content: '""',
      flex: 1,
      height: 1,
      borderTop: `${theme.fn.size({ size, sizes })}px ${variant} ${theme.colors.neutral[7]}`,
      marginRight: theme.spacing.xs,
    },

    '&::after': {
      content: '""',
      flex: 1,
      borderTop: `${theme.fn.size({ size, sizes })}px ${variant} ${theme.colors.neutral[7]}`,
      marginLeft: theme.spacing.xs,
    },
  },

  labelDefaultStyles: {
    color:
      color === 'dark'
        ? theme.colors.dark[1]
        : theme.fn.themeColor(
          color,
          theme.colorScheme === 'dark' ? 5 : theme.fn.primaryShade(),
          false
        ),
  },

  horizontal: {
    border: 0,
    borderTopWidth: theme.fn.size({ size, sizes }),
    borderTopColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 3 : 4, false),
    borderTopStyle: variant,
    margin: 0,
  },

  vertical: {
    border: 0,
    alignSelf: 'stretch',
    height: '100%',
    borderLeftWidth: theme.fn.size({ size, sizes }),
    borderLeftColor: theme.fn.themeColor(color, 4, false),
    borderLeftStyle: variant,
  },
}));
