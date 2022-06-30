import React from 'react';
import { Group, Button } from 'coengageui_core';
import { useClipboard } from 'coengageui_hooks';

const code = `
import { Button } from 'coengageui_core';
import { useClipboard } from 'coengageui_hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

export const useClipboardDemo: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
