import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';
import { useCoengageUITheme } from '../theme/CoengageUIProvider';
import type { CoengageUITheme } from '../theme/types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: CoengageUITheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useCoengageUITheme();
  return <EmotionGlobal styles={css(typeof styles === 'function' ? styles(theme) : styles)} />;
}
