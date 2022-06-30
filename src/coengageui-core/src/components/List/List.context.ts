import { createContext, useContext } from 'react';
import { CSSObject, CoengageUINumberSize, CoengageUITheme } from '@coengageui/styles';
import type { ListItemStylesNames } from './ListItem/ListItem';

interface ListContextValue {
  classNames?: Partial<Record<ListItemStylesNames, string>>;
  styles?:
    | Partial<Record<ListItemStylesNames, CSSObject>>
    | ((theme: CoengageUITheme) => Partial<Record<ListItemStylesNames, CSSObject>>);
  spacing?: CoengageUINumberSize;
  center?: boolean;
  icon?: React.ReactNode;
}

export const ListContext = createContext<ListContextValue>(null);

export function useListContext(): ListContextValue {
  return useContext(ListContext) || {};
}
