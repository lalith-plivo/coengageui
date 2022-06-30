import type { CoengageUINumberSize } from 'coengageui_styles';
import { createUseContext } from '../../utils';

interface GridContextValue {
  gutter: CoengageUINumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createUseContext<GridContextValue>(null);
