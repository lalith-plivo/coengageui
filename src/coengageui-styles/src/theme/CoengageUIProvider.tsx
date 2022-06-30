import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { DEFAULT_THEME } from './default-theme';
import { GlobalStyles } from './GlobalStyles';
import { CoengageUICssVariables } from './CoengageUICssVariables';
import type { CoengageUIThemeOverride, CoengageUITheme } from './types';
import type { CSSObject } from '../tss';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme';
import { filterProps } from './utils/filter-props/filter-props';
import { NormalizeCSS } from './NormalizeCSS';

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: CoengageUITheme, params: any) => Record<string, CSSObject>)
>;

type ProviderClassNames = Record<string, Record<string, string>>;
type CoengageUIDefaultProps = Record<string, Record<string, any>>;

interface CoengageUIProviderContextType {
  theme: CoengageUITheme;
  styles: ProviderStyles;
  classNames: ProviderClassNames;
  emotionOptions: EmotionCacheOptions;
  defaultProps: CoengageUIDefaultProps;
}

const CoengageUIProviderContext = createContext<CoengageUIProviderContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  classNames: {},
  emotionOptions: { key: 'coengage', prepend: true },
  defaultProps: {},
});

export function useCoengageUITheme() {
  return useContext(CoengageUIProviderContext)?.theme || DEFAULT_THEME;
}

export function useCoengageUIThemeStyles(component: string) {
  const ctx = useContext(CoengageUIProviderContext);
  return { styles: ctx.styles[component] || {}, classNames: ctx.classNames[component] || {} };
}

export function useCoengageUIEmotionOptions(): EmotionCacheOptions {
  return (
    useContext(CoengageUIProviderContext)?.emotionOptions || { key: 'coengage', prepend: true }
  );
}

export function useCoengageUIDefaultProps<T extends Record<string, any>>(
  component: string,
  defaultProps: Partial<T>,
  props: T
): T {
  const contextProps = useContext(CoengageUIProviderContext)?.defaultProps?.[component] || {};
  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface CoengageUIProviderProps {
  theme?: CoengageUIThemeOverride;
  styles?: ProviderStyles;
  classNames?: ProviderClassNames;
  defaultProps?: CoengageUIDefaultProps;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}

export function CoengageUIProvider({
  theme,
  styles = {},
  classNames = {},
  defaultProps = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children,
}: CoengageUIProviderProps) {
  const ctx = useContext(CoengageUIProviderContext);
  const overrides = {
    themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
    emotionOptions: inherit ? { ...ctx.emotionOptions, ...emotionOptions } : emotionOptions,
    styles: inherit ? { ...ctx.styles, ...styles } : styles,
    classNames: inherit ? { ...ctx.classNames, ...classNames } : classNames,
    defaultProps: inherit ? { ...ctx.defaultProps, ...defaultProps } : defaultProps,
  };

  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, overrides.themeOverride);

  return (
    <CoengageUIProviderContext.Provider
      value={{
        theme: mergedTheme,
        styles: overrides.styles,
        classNames: overrides.classNames,
        emotionOptions: overrides.emotionOptions,
        defaultProps: overrides.defaultProps,
      }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles theme={mergedTheme} />}
      {withCSSVariables && <CoengageUICssVariables theme={mergedTheme} />}
      {children}
    </CoengageUIProviderContext.Provider>
  );
}

CoengageUIProvider.displayName = '@coengageui/core/CoengageUIProvider';
