import React from 'react';
import { Group, Badge } from 'coengageui_core';
import { useIdle } from 'coengageui_hooks';

const code = `
import { Badge } from 'coengageui_core';
import { useIdle } from 'coengageui_hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
