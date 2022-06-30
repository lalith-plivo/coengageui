import type { CoengageUIThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function fontStyles(theme: CoengageUIThemeBase) {
  return (): CSSObject => ({ fontFamily: theme.fontFamily || 'sans-serif' });
}
