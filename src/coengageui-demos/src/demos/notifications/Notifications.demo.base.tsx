import React from 'react';
import { Group, Button } from '@coengageui/core';
import { showNotification } from '@coengageui/notifications';

const code = `
import { Group, Button } from '@coengageui/core';
import { showNotification } from '@coengageui/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

export const base: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
