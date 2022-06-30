import { createStyles, CSSObject, CoengageUIColor, CoengageUINumberSize } from 'coengageui_styles';
import { IndicatorPosition } from './Indicator.types';

export interface IndicatorStylesParams {
  radius: CoengageUINumberSize;
  size: number;
  color: CoengageUIColor;
  position: IndicatorPosition;
  offset: number;
  inline: boolean;
  withBorder: boolean;
  withLabel: boolean;
  zIndex: number;
}

function getPositionStyles(_position: IndicatorPosition, offset = 0) {
  const styles: CSSObject = {};
  const [position, placement] = _position.split('-');
  let translateX = '';
  let translateY = '';

  if (position === 'top') {
    styles.top = offset;
    translateY = '-50%';
  }

  if (position === 'middle') {
    styles.top = '50%';
    translateY = '-50%';
  }

  if (position === 'bottom') {
    styles.bottom = offset;
    translateY = '50%';
  }

  if (placement === 'start') {
    styles.left = offset;
    translateX = '-50%';
  }

  if (placement === 'center') {
    styles.left = '50%';
    translateX = '-50%';
  }

  if (placement === 'end') {
    styles.right = offset;
    translateX = '50%';
  }

  styles.transform = `translate(${translateX}, ${translateY})`;

  return styles;
}

export default createStyles(
  (
    theme,
    {
      radius,
      size,
      color,
      position,
      offset,
      inline,
      withBorder,
      withLabel,
      zIndex,
    }: IndicatorStylesParams
  ) => ({
    root: {
      position: 'relative',
      display: inline ? 'inline-block' : 'block',
    },

    indicator: {
      ...getPositionStyles(position, offset),
      zIndex,
      position: 'absolute',
      [withLabel ? 'minWidth' : 'width']: size,
      height: size,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: theme.fontSizes.xs,
      paddingLeft: withLabel ? theme.spacing.xs / 2 : 0,
      paddingRight: withLabel ? theme.spacing.xs / 2 : 0,
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      backgroundColor: theme.fn.themeColor(
        color || theme.primaryColor,
        theme.fn.primaryShade(),
        false
      ),
      border: withBorder
        ? `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`
        : undefined,
      color: theme.white,
      whiteSpace: 'nowrap',
    },
  })
);
