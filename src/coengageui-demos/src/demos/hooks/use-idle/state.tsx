import React from 'react';
import { Group, Badge } from '@coengageui/core';
import { useIdle } from '@coengageui/hooks';

const initialStateCode = `
import { Badge } from '@coengageui/core';
import { useIdle } from '@coengageui/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function InitialStateDemo() {
  const idle = useIdle(2000, { initialState: false });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleInitialState: CoengageUIDemo = {
  type: 'demo',
  code: initialStateCode,
  component: InitialStateDemo,
};
