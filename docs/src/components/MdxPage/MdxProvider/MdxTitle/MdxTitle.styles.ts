import { createStyles } from 'coengageui_core';

export default createStyles((theme) => ({
  title: {
    marginTop: theme.spacing.xl * 1.2,
    marginBottom: theme.spacing.md,
    wordBreak: 'break-word',
    fontFamily: `Inter, ${theme.fontFamily}`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  link: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    color: 'inherit',
  },

  offset: {
    position: 'relative',
    top: -62,
  },
}));
