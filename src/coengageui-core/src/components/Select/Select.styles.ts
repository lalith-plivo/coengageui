import { createStyles } from 'coengageui_styles';

export default createStyles(() => ({
  input: {
    '&:not(:disabled)': {
      cursor: 'pointer',

      '&::selection': {
        backgroundColor: 'transparent',
      },
    },
  },
}));
