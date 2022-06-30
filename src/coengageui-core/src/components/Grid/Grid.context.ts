import type { CoengageUINumberSize } from '@coengageui/styles';
import { createUseContext } from '../../utils';

interface GridContextValue {
  gutter: CoengageUINumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createUseContext<GridContextValue>(null);
