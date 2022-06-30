import React from 'react';
import { Button, Group } from '@coengageui/core';

const code = `
import { Button } from '@coengageui/core';

function Demo() {
  return <Button compact>My compact button</Button>;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button compact>Compact filled button</Button>
      <Button compact variant="light">
        Compact light button
      </Button>
      <Button compact variant="outline">
        Compact outline button
      </Button>
    </Group>
  );
}

export const compact: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
