import type { CoengageUIThemeBase, CoengageUINumberSize } from '../../../types';
import { size } from '../size/size';

export function largerThan(theme: CoengageUIThemeBase) {
  return (breakpoint: CoengageUINumberSize) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
}

export function smallerThan(theme: CoengageUIThemeBase) {
  return (breakpoint: CoengageUINumberSize) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}
