import { createStyles, CoengageUISize } from 'coengageui_styles';

export interface JsonInputStylesParams {
  size: CoengageUISize;
}

export default createStyles((theme, { size }: JsonInputStylesParams) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}));
