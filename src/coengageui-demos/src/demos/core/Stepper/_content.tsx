import React from 'react';
import { Box, BoxProps } from 'coengageui_core';

export function Content(props: BoxProps<'div'>) {
  return (
    <Box
      sx={(theme) => ({
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        fontSize: theme.fontSizes.lg,
      })}
      {...props}
    />
  );
}
