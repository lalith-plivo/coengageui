import type { CoengageUIThemeBase } from '../../../types';

export function themeColor(theme: CoengageUIThemeBase) {
  return (color: string, shade: number, primaryFallback: boolean = true) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors
      ? theme.colors[color][shade]
      : primaryFallback
      ? primaryShades[shade]
      : color;
  };
}
