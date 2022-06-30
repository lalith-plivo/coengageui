import { createStyles, CoengageUINumberSize, CSSObject } from '@coengageui/styles';

export interface MediaQueryStylesParams {
  smallerThan: CoengageUINumberSize;
  largerThan: CoengageUINumberSize;
  styles: CSSObject;
  query: string;
}

export default createStyles(
  (theme, { smallerThan, largerThan, query, styles }: MediaQueryStylesParams) => {
    const media: CSSObject = {};
    const minWidth = theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1;
    const maxWidth = theme.fn.size({ size: smallerThan, sizes: theme.breakpoints });

    if (largerThan !== undefined && smallerThan !== undefined) {
      media[`@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`] = styles;
    } else {
      if (largerThan !== undefined) {
        media[
          `@media (min-width: ${
            theme.fn.size({ size: largerThan, sizes: theme.breakpoints }) + 1
          }px)`
        ] = styles;
      }

      if (smallerThan !== undefined) {
        media[
          `@media (max-width: ${theme.fn.size({ size: smallerThan, sizes: theme.breakpoints })}px)`
        ] = styles;
      }
    }

    if (query) {
      media[`@media ${query}`] = styles;
    }

    return { media };
  }
);
