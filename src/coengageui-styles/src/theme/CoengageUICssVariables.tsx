import React from 'react';
import { Global } from '@emotion/react';
import type { CoengageUITheme, CoengageUISize } from './types';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<CoengageUISize, number | string>,
  name: string
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--coengageui-${name}-${size}`] =
      typeof sizes[size] === 'number' ? `${sizes[size]}px` : sizes[size];
  });
}

export function CoengageUICssVariables({ theme }: { theme: CoengageUITheme }) {
  const variables: Record<string, string> = {
    '--coengageui-color-white': theme.white,
    '--coengageui-color-black': theme.black,
    '--coengageui-transition-timing-function': theme.transitionTimingFunction,
    '--coengageui-line-height': `${theme.lineHeight}`,
    '--coengageui-font-family': theme.fontFamily,
    '--coengageui-font-family-monospace': theme.fontFamilyMonospace,
    '--coengageui-font-family-headings': theme.headings.fontFamily,
    '--coengageui-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--coengageui-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--coengageui-${heading}-font-size`] = `${headings[heading].fontSize}px`;
    variables[`--coengageui-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}
