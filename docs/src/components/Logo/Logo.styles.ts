import { createStyles } from 'coengageui_core';

export default createStyles((theme) => ({
  logo: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    userSelect: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  image: {
    height: 30,
  },
}));
