import React from 'react';
import { Group, Badge } from '@coengageui/core';
import { useIdle } from '@coengageui/hooks';

const eventsCode = `
import { Badge } from '@coengageui/core';
import { useIdle } from '@coengageui/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: CoengageUIDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};
