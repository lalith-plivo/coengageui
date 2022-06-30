import React from 'react';
import { Button, Group } from '@coengageui/core';
import { useToggle, upperFirst } from '@coengageui/hooks';

const code = `
import { Button } from '@coengageui/core';
import { useToggle } from '@coengageui/hooks';

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
