import type { CoengageUIThemeBase } from '../../../types';

export function primaryShade(theme: CoengageUIThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    if (typeof theme.primaryShade === 'number') {
      return theme.primaryShade;
    }

    return theme.primaryShade[colorScheme || theme.colorScheme];
  };
}
