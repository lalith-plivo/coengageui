import React from 'react';
import { Group, Button, Text, CoengageUIProvider, useCoengageUIColorScheme } from '@coengageui/core';

const code = `import { Button, CoengageUIProvider, Text } from '@coengageui/core';

function Demo() {
  return (
    <CoengageUIProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text align="center" mb="xs">Georgia or serif text</Text>

      <CoengageUIProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
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

      <CoengageUIProvider theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme }}>
        <Group position="center">
          <Button>Greycliff CF button</Button>
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
