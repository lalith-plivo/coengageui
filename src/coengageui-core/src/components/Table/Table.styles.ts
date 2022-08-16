import { createStyles, CoengageUINumberSize } from 'coengageui_styles';

export interface TableStylesParams {
  captionSide: 'top' | 'bottom';
  horizontalSpacing: CoengageUINumberSize;
  verticalSpacing: CoengageUINumberSize;
  fontSize: CoengageUINumberSize;
}

export default createStyles(
  (
    theme,
    { captionSide, horizontalSpacing, verticalSpacing, fontSize }: TableStylesParams,
    getRef
  ) => {
    const striped = { ref: getRef('striped') };
    const hover = { ref: getRef('hover') };

    return {
      striped,
      hover,

      root: {
        ...theme.fn.fontStyles(),
        width: '100%',
        borderCollapse: 'collapse',
        captionSide,
        color: theme.colorScheme === 'dark' ? theme.typograhy_regular : theme.typograhy_regular,
        lineHeight: theme.lineHeight,
        boxShadow: theme.shadows.lg,
        border: `1px solid ${theme.colors.neutral[6]}`,
        borderRadius: 2,

        '& caption': {
          marginTop: captionSide === 'top' ? 0 : theme.spacing.xs,
          marginBottom: captionSide === 'bottom' ? 0 : theme.spacing.xs,
          fontSize: theme.fontSizes.sm,
          color: theme.colorScheme === 'dark' ? theme.typograhy_regular : theme.typograhy_regular,
        },

        '& thead tr th, & tfoot tr th': {
          textAlign: 'left',
          fontWeight: 500,
          color: theme.colorScheme === 'dark' ? theme.typograhy_regular : theme.typograhy_regular,
          fontSize: theme.fn.size({ size: fontSize, sizes: theme.fontSizes }),
          // padding: `${theme.fn.size({
          //   size: verticalSpacing,
          //   sizes: theme.spacing,
          // })}px ${theme.fn.size({ size: horizontalSpacing, sizes: theme.spacing })}px`,
          padding: 16,
          background: '#F6F7F8',
        },

        // '& thead tr th': {
        //   borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        //     }`,
        // },

        '& tfoot tr th': {
          borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,
        },

        '& tbody tr td': {
          padding: 16,
          borderBottom: '1px solid #F6F7F8',
          fontSize: theme.fn.size({ size: fontSize, sizes: theme.fontSizes }),
        },

        '& tbody tr:last-of-type td': {
          borderBottom: 'none',
        },

        [`&.${striped.ref} tbody tr:nth-of-type(odd)`]: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [`&.${hover.ref} tbody tr:hover`]: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      },
    };
  }
);
