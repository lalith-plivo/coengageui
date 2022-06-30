import React from 'react';
import { Button, Text, Group } from '@coengageui/core';
import { useForceUpdate, randomId } from '@coengageui/hooks';

const code = `
import { Button, Text, Group } from '@coengageui/core';
import { useForceUpdate, randomId } from '@coengageui/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
