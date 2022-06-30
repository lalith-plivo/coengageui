import React from 'react';
import { Group, Badge } from '@coengageui/core';
import { useMediaQuery } from '@coengageui/hooks';

const code = `
import { Badge } from '@coengageui/core';
import { useMediaQuery } from '@coengageui/hooks';

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
