import type { CoengageUIThemeBase, CoengageUINumberSize } from '../../../types';

export function radius(theme: CoengageUIThemeBase) {
  return (size: CoengageUINumberSize | (string & {})): string | number => {
    if (typeof size === 'number') {
      return size;
    }

    const defaultRadius =
      typeof theme.defaultRadius === 'number'
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius] || theme.defaultRadius;

    return theme.radius[size] || size || defaultRadius;
  };
}
