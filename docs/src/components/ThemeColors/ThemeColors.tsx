import React from 'react';
import { useCoengageUITheme } from 'coengageui_core';
import { ColorsGroup } from './ColorsGroup';

export function ThemeColors() {
  const theme = useCoengageUITheme();
  const swatches = Object.keys(theme.colors).map((group) => (
    <ColorsGroup group={group} key={group} />
  ));

  return (
    <div style={{ marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl }}>{swatches}</div>
  );
}
