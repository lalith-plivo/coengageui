import { CoengageUITheme } from 'coengageui_styles';
import type { SimpleGridBreakpoint } from '../SimpleGrid.styles';

export function getSortedBreakpoints(theme: CoengageUITheme, breakpoints: SimpleGridBreakpoint[]) {
  if (breakpoints.length === 0) {
    return breakpoints;
  }

  const property = 'maxWidth' in breakpoints[0] ? 'maxWidth' : 'minWidth';
  const sorted = [...breakpoints].sort(
    (a, b) =>
      theme.fn.size({ size: b[property], sizes: theme.breakpoints }) -
      theme.fn.size({ size: a[property], sizes: theme.breakpoints })
  );

  return property === 'minWidth' ? sorted.reverse() : sorted;
}
