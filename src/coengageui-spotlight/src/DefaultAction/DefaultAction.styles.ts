import { createStyles, CoengageUINumberSize } from '@coengageui/core';

export interface DefaultActionStylesParams {
  radius: CoengageUINumberSize;
}

export default createStyles((theme, { radius }: DefaultActionStylesParams) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: '10px 12px',
    // borderRadius: theme.fn.radius(radius),
  },

  actionHovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.info[1] : theme.colors.info[1],
  },

  actionIcon: {
    color: theme.colorScheme === 'dark' ? theme.dark : theme.dark,
  },

  actionBody: {
    flex: 1,
  },
}));
