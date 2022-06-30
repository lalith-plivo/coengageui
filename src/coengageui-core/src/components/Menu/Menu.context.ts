import { CoengageUINumberSize, CoengageUITheme, CSSObject } from 'coengageui_styles';
import { createUseContext } from '../../utils';
import type { MenuStylesNames } from './Menu';

interface MenuContextValue {
  hovered: number;
  radius: CoengageUINumberSize;
  classNames: Partial<Record<MenuStylesNames, string>>;
  styles:
    | Partial<Record<MenuStylesNames, CSSObject>>
    | ((theme: CoengageUITheme) => Partial<Record<MenuStylesNames, CSSObject>>);
  onItemHover(index: number): void;
  onItemKeyDown(event: React.KeyboardEvent<HTMLElement>): void;
  onItemClick(): void;
}

export const [MenuProvider, useMenuContext] = createUseContext<MenuContextValue>(null);
