import React from 'react';
import { Group, Badge } from 'coengageui_core';
import { useMediaQuery } from 'coengageui_hooks';

const code = `
import { Badge } from 'coengageui_core';
import { useMediaQuery } from 'coengageui_hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Group position="center">
      <Badge color={matches ? 'teal' : 'red'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

export const useMediaQueryDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
