import React from 'react';
import { CoengageUIProvider, Group, Button, CoengageUITheme } from '@coengageui/core';

function Wrapper({ primaryShade }: { primaryShade: CoengageUITheme['primaryShade'] }) {
  return (
    <CoengageUIProvider inherit theme={{ primaryShade }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </CoengageUIProvider>
  );
}

const codeTemplate = (props: string) => `
import { CoengageUIProvider, Group, Button } from '@coengageui/core';

function Demo() {
  return (
    <CoengageUIProvider theme={{ primaryShade: ${props
      .replace(' primaryShade={', '')
      .replace('}', '')} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </CoengageUIProvider>
  );
}
`;

export const primaryShade: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper as any,
  codeTemplate,
  configurator: [{ name: 'primaryShade', type: 'number', initialValue: 6, min: 0, max: 9 }],
};
