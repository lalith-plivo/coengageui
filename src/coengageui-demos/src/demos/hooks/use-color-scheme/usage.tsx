import React from 'react';
import { Group, Badge } from 'coengageui_core';
import { useColorScheme } from 'coengageui_hooks';

const code = `
import { Badge } from 'coengageui_core';
import { useColorScheme } from 'coengageui_hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
