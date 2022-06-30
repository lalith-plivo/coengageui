import React from 'react';
import { Tooltip, Group, Button } from 'coengageui_core';

const code = `
import { Button, Tooltip } from 'coengageui_core';

function Demo() {
  return (
    <>
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button variant="outline">Delay open - 500ms</Button>
      </Tooltip>

      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button variant="outline">Delay close - 500ms</Button>
      </Tooltip>
    </>
  );
};
`;

export function Demo() {
  return (
    <Group position="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button variant="outline">Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button variant="outline">Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}

export const delay: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
