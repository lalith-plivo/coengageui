import React, { useState } from 'react';
import { Modal, Group, Button } from 'coengageui_core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useState } from 'react';
import { Modal, Button, Group } from 'coengageui_core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!">
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
