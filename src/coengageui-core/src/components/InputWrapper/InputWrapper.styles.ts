import { createStyles, CoengageUISize } from 'coengageui_styles';

export interface InputWrapperStylesParams {
  size: CoengageUISize;
}

export default createStyles((theme, { size }: InputWrapperStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },

  label: {
    display: 'inline-block',
    fontSize: `${theme.fontSizes.sm}px`,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    wordBreak: 'break-word',
    cursor: 'default',
    WebkitTapHighlightColor: 'transparent',
  },

  error: {
    marginTop: 4,
    wordBreak: 'break-word',
    color: theme.colors.danger[1],
    lineHeight: 1.5,
    fontWeight: 400,
    fontSize: `${theme.fontSizes.sm}px`,
  },

  description: {
    marginTop: 4,
    wordBreak: 'break-word',
    color: `${
      theme.colorScheme === 'dark' ? theme.typography_light : theme.typography_light
    } !important`,
    fontSize: `${theme.fontSizes.sm}px`,
    lineHeight: 1.5,
    fontWeight: 400,
  },

  required: {
    color: theme.colors.danger[1],
  },
}));
