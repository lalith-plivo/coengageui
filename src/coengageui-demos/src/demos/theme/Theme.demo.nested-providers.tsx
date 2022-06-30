import React from 'react';
import {
  Group,
  Button,
  Text,
  CoengageUIProvider,
  useCoengageUIColorScheme,
} from 'coengageui_core';

const code = `import { Button, CoengageUIProvider, Text } from 'coengageui_core';

function Demo() {
  return (
    <CoengageUIProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text align="center" mb="xs">Georgia or serif text</Text>

      <CoengageUIProvider theme={{ fontFamily: 'Inter, sans-serif' }}>
        <Button>Inter button</Button>
      </CoengageUIProvider>
    </CoengageUIProvider>
  );
}`;

function Demo() {
  const { colorScheme } = useCoengageUIColorScheme();

  return (
    <CoengageUIProvider theme={{ fontFamily: 'Georgia, serif', colorScheme }}>
      <Text align="center" mb="xs">
        Georgia or serif text
      </Text>

      <CoengageUIProvider theme={{ fontFamily: 'Inter, sans-serif', colorScheme }}>
        <Group position="center">
          <Button>Inter button</Button>
        </Group>
      </CoengageUIProvider>
    </CoengageUIProvider>
  );
}

export const nestedProviders: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
