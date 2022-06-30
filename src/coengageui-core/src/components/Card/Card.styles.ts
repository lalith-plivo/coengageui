import { createStyles } from 'coengageui_styles';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },
}));
