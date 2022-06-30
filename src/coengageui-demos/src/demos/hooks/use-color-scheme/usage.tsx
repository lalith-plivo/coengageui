import React from 'react';
import { Group, Badge } from '@coengageui/core';
import { useColorScheme } from '@coengageui/hooks';

const code = `
import { Badge } from '@coengageui/core';
import { useColorScheme } from '@coengageui/hooks';

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
