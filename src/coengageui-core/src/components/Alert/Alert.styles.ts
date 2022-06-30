import { createStyles, CoengageUIColor, CoengageUINumberSize } from 'coengageui_styles';

export interface AlertStylesParams {
  color: CoengageUIColor;
  radius: CoengageUINumberSize;
  type: 'filled' | 'outline' | 'light';
  variant: 'info' | 'success' | 'warning' | 'danger';
}

export default createStyles((theme, { radius, variant }: AlertStylesParams, getRef) => ({
  root: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    overflow: 'hidden',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    borderRadius: theme.fn.radius(radius),
    border: '1px solid transparent',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  body: {
    flex: 1,
  },

  title: {
    boxSizing: 'border-box',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  // Alert Styles

  info__filled: {
    backgroundColor: theme.fn.variant({ variant: 'info', color: variant }).dark,
    color: theme.white,
    [`& .${getRef('closeButton')}`]: {
      color: theme.white,
    },
  },

  info__light: {
    backgroundColor: theme.fn.variant({ variant: 'info', color: variant }).light,
    color: theme.fn.variant({ variant: 'info', color: variant }).dark,
  },
  info__outline: {
    backgroundColor: theme.white,
    color: theme.fn.variant({ variant: 'info', color: variant }).dark,
    borderColor: theme.fn.variant({ variant: 'info', color: variant }).dark,
  },

  warning__filled: {
    backgroundColor: theme.fn.variant({ variant: 'warning', color: variant }).dark,
    color: theme.white,
    [`& .${getRef('closeButton')}`]: {
      color: theme.white,
    },
  },

  warning__light: {
    backgroundColor: theme.fn.variant({ variant: 'warning', color: variant }).light,
    color: theme.fn.variant({ variant: 'warning', color: variant }).dark,
  },
  warning__outline: {
    backgroundColor: theme.white,
    color: theme.fn.variant({ variant: 'warning', color: variant }).dark,
    borderColor: theme.fn.variant({ variant: 'warning', color: variant }).dark,
  },

  success__filled: {
    backgroundColor: theme.fn.variant({ variant: 'success', color: variant }).dark,
    color: theme.white,
    [`& .${getRef('closeButton')}`]: {
      color: theme.white,
    },
  },

  success__light: {
    backgroundColor: theme.fn.variant({ variant: 'success', color: variant }).light,
    color: theme.fn.variant({ variant: 'success', color: variant }).dark,
  },
  success__outline: {
    backgroundColor: theme.white,
    color: theme.fn.variant({ variant: 'success', color: variant }).dark,
    borderColor: theme.fn.variant({ variant: 'success', color: variant }).dark,
  },

  danger__filled: {
    backgroundColor: theme.fn.variant({ variant: 'danger', color: variant }).dark,
    color: theme.white,
    [`& .${getRef('closeButton')}`]: {
      color: theme.white,
    },
  },

  danger__light: {
    backgroundColor: theme.fn.variant({ variant: 'danger', color: variant }).light,
    color: theme.fn.variant({ variant: 'danger', color: variant }).dark,
  },
  danger__outline: {
    backgroundColor: theme.white,
    color: theme.fn.variant({ variant: 'danger', color: variant }).dark,
    borderColor: theme.fn.variant({ variant: 'danger', color: variant }).dark,
  },

  icon: {
    lineHeight: 1,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing.md,
    marginTop: 1,
  },

  message: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: theme.fontSizes.sm,
  },

  closeButton: {
    ref: getRef('closeButton'),
    marginTop: 2,
    color: theme.fn.variant({ variant, color: variant }).dark,
  },

  titlewrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
}));
