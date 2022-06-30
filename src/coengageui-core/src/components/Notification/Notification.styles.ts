import { createStyles, CoengageUIColor, CoengageUINumberSize } from 'coengageui_styles';

type NotificationVariant = 'info' | 'success' | 'warning' | 'danger';

export interface NotificationStylesParams {
  color?: CoengageUIColor;
  radius: CoengageUINumberSize;
  variant: NotificationVariant;
}

export default createStyles((theme, { variant, radius }: NotificationStylesParams, getRef) => {
  const _radius = theme.fn.radius(radius) as number;
  const topBottom = Math.min(Math.max(_radius / 1.2, 4), 30);
  const colors = theme.fn.variant({ variant, color: variant });

  return {
    closeButton: {},

    icon: {
      ref: getRef('icon'),
      boxSizing: 'border-box',
      marginRight: theme.spacing.md,
      width: 28,
      height: 28,
      borderRadius: 28,
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.white,
    },

    withIcon: {
      paddingLeft: theme.spacing.xs,

      '&::before': {
        display: 'none',
      },
    },

    root: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 22,
      paddingRight: 5,
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      borderRadius: _radius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
      boxShadow: theme.shadows.lg,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.neutral[6] : theme.colors.neutral[6]
        }`,

      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: 6,
        top: topBottom,
        bottom: topBottom,
        left: 4,
        borderRadius: _radius,
        backgroundColor: colors.dark,
      },

      [`& .${getRef('icon')}`]: {
        backgroundColor: colors.dark,
        color: theme.white,
      },
    },

    body: {
      flex: 1,
      overflow: 'hidden',
      marginRight: 10,
    },

    loader: {
      marginRight: theme.spacing.md,
    },

    title: {
      marginBottom: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.colorScheme === 'dark' ? theme.typograhy_dark : theme.typograhy_dark,
      fontWeight: 500,
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.typograhy_regular : theme.typograhy_regular,
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      '&:only-child': {
        color: theme.colorScheme === 'dark' ? theme.black : theme.black,
      },
    },
  };
});
