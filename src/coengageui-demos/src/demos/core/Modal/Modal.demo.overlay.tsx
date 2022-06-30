import React, { useState } from 'react';
import { Modal, Group, Button, useCoengageUITheme } from '@coengageui/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { Modal, useCoengageUITheme } from '@coengageui/core';

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {/* Modal content */}
    </Modal>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useCoengageUITheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export const overlay: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
