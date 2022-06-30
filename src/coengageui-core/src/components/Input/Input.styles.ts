import { createStyles, CoengageUINumberSize, CoengageUISize } from '@coengageui/styles';

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

export interface InputStylesParams {
  radius: CoengageUINumberSize;
  size: CoengageUISize;
  variant: InputVariant;
  multiline: boolean;
  invalid: boolean;
  rightSectionWidth: number;
  withRightSection: boolean;
  iconWidth: number;
}

export const sizes = {
  xs: 30,
  sm: 36,
  md: 48,
  lg: 50,
  xl: 60,
};

export default createStyles(
  (
    theme,
    {
      size,
      multiline,
      radius,
      variant,
      invalid,
      rightSectionWidth,
      withRightSection,
      iconWidth,
    }: InputStylesParams
  ) => {
    const invalidColor = theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7];
    const sizeStyles =
      variant === 'default' || variant === 'filled'
        ? {
            minHeight: theme.fn.size({ size, sizes }),
            paddingLeft: theme.fn.size({ size, sizes }) / 3,
            paddingRight: withRightSection ? rightSectionWidth : theme.fn.size({ size, sizes }) / 3,
            borderRadius: theme.fn.radius(radius),
          }
        : null;

    return {
      wrapper: {
        position: 'relative',
      },

      input:
        variant === 'headless'
          ? {}
          : {
              ...theme.fn.fontStyles(),
              height: multiline
                ? variant === 'unstyled'
                  ? undefined
                  : 'auto'
                : theme.fn.size({ size, sizes }),
              WebkitTapHighlightColor: 'transparent',
              lineHeight: multiline ? theme.lineHeight : `${theme.fn.size({ size, sizes }) - 2}px`,
              appearance: 'none',
              resize: 'none',
              boxSizing: 'border-box',
              fontSize: theme.fn.size({ size: 'sm', sizes: theme.fontSizes }),
              width: '100%',
              color: theme.colorScheme === 'dark' ? theme.black : theme.black,
              display: 'block',
              textAlign: 'left',
              ...sizeStyles,

              '&:disabled': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.neutral[8] : theme.colors.neutral[8],
                color: theme.colors.neutral[5],
                opacity: 0.6,
                cursor: 'not-allowed',

                '&::placeholder': {
                  color: theme.typography_light,
                },
              },
              '&::placeholder': {
                opacity: 1,
                userSelect: 'none',
                color:
                  theme.colorScheme === 'dark' ? theme.typography_light : theme.typography_light,
              },

              '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
                {
                  appearance: 'none',
                },

              '&[type=number]': {
                MozAppearance: 'textfield',
              },
            },

      defaultVariant: {
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.neutral[6] : theme.colors.neutral[6]
        }`,
        backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
        transition: 'border-color 100ms ease',

        '&:focus, &:focus-within': {
          outline: 'none',
          borderColor: theme.colors.info[theme.colorScheme === 'dark' ? 1 : 1],
        },
      },

      filledVariant: {
        border: '1px solid transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

        '&:focus, &:focus-within': {
          outline: 'none',
          borderColor: `${
            theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 5]
          } !important`,
        },
      },

      unstyledVariant: {
        borderWidth: 0,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: 'transparent',
        minHeight: 28,
        outline: 0,

        '&:focus, &:focus-within': {
          outline: 'none',
          borderColor: 'transparent',
        },

        '&:disabled': {
          backgroundColor: 'transparent',

          '&:focus, &:focus-within': {
            outline: 'none',
            borderColor: 'transparent',
          },
        },
      },

      withIcon: {
        paddingLeft: typeof iconWidth === 'number' ? iconWidth : theme.fn.size({ size, sizes }),
      },

      invalid: {
        color: invalidColor,
        borderColor: invalidColor,

        '&::placeholder': {
          opacity: 1,
          color: invalidColor,
        },
      },

      disabled: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        color: theme.colors.dark[2],
        opacity: 0.6,
        cursor: 'not-allowed',

        '&::placeholder': {
          color: theme.colors.dark[2],
        },
      },

      icon: {
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 1,
        left: 16,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: typeof iconWidth === 'number' ? iconWidth : 20,
        color: invalid
          ? theme.colors.danger[theme.colorScheme === 'dark' ? 1 : 1]
          : theme.colorScheme === 'dark'
          ? theme.colors.neutral[5]
          : theme.colors.neutral[5],
      },

      rightSection: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: rightSectionWidth,
      },
    };
  }
);
