import React from 'react';
import { Button, Group } from 'coengageui_core';
import { useToggle, upperFirst } from 'coengageui_hooks';

const code = `
import { Button } from 'coengageui_core';
import { useToggle } from 'coengageui_hooks';

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
