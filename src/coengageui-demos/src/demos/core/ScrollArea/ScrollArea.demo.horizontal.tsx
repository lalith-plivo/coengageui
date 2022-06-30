import React from 'react';
import { Group, ScrollArea } from '@coengageui/core';
import { Content } from './_content';

const code = `
import { ScrollArea } from '@coengageui/core';

function Demo() {
  return (
    <ScrollArea style={{ width: 300, height: 200 }}>
      <div style={{ width: 600 }}>
        {/* ... content */}
      </div>
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ScrollArea style={{ width: 300, height: 200 }}>
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
    </Group>
  );
}

export const horizontal: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
