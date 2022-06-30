import React from 'react';
import { useCoengageUITheme, ColorSwatch, Group } from 'coengageui_core';

const code = `
import { ColorSwatch, Group, useCoengageUITheme } from 'coengageui_core';

function Demo() {
  const theme = useCoengageUITheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.colors[color][6]} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
