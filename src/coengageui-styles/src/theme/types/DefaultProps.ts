import type { CSSProperties } from 'react';
import type { CoengageUIStyleSystemProps } from './CoengageUIStyleSystem';
import type { CoengageUITheme } from './CoengageUITheme';
import type { CSSObject } from '../../tss';

export type Sx = CSSObject | ((theme: CoengageUITheme) => CSSObject);

export interface DefaultProps<T extends string = never> extends CoengageUIStyleSystemProps {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | (Sx | undefined)[];
  classNames?: Partial<Record<T, string>>;
  styles?:
    | Partial<Record<T, CSSObject>>
    | ((theme: CoengageUITheme) => Partial<Record<T, CSSObject>>);
}
