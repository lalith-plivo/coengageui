import React from 'react';
import { Group, Button } from 'coengageui_core';
import { useModals } from 'coengageui_modals';

const code = `
import { Button } from 'coengageui_core';
import { useModals } from 'coengageui_modals';

function Demo() {
  const modals = useModals();
  const openContextModal = () =>
    modals.openContextModal('demonstration', {
      title: 'Test modal from context',
      innerProps: {
        modalBody:
          'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
      }
    });

  return <Button onClick={openContextModal}>Open demonstration context modal</Button>;
}
`;

function Demo() {
  const modals = useModals();

  const openContextModal = () =>
    modals.openContextModal('demonstration', {
      title: 'Test modal from context',
      innerProps: {
        modalBody:
          'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
      },
    });

  return (
    <Group position="center">
      <Button onClick={openContextModal}>Open demonstration context modal</Button>
    </Group>
  );
}

export const context: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
