import { createStyles, CoengageUIColor } from 'coengageui_styles';

export interface MarkStylesParams {
  color: CoengageUIColor;
}

export default createStyles((theme, { color }: MarkStylesParams) => ({
  root: {
    backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 2),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
  },
}));
