import React from 'react';
import { Group, Button, Text } from 'coengageui_core';
import { useModals } from 'coengageui_modals';
import { useNotifications } from 'coengageui_notifications';

const code = `
import { Button, Text } from 'coengageui_core';
import { useModals } from 'coengageui_modals';

function Demo() {
  const modals = useModals();

  const openConfirmModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openConfirmModal}>Open confirm modal</Button>;
}
`;

function Demo() {
  const notifications = useNotifications();
  const modals = useModals();

  const openConfirmModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onCancel: () =>
        notifications.showNotification({
          title: 'Canceled',
          message: 'Confirm modal was canceled',
          color: 'gray',
        }),
      onConfirm: () =>
        notifications.showNotification({
          title: 'Confirmed',
          message: 'Confirm modal was confirmed',
          color: 'teal',
        }),
    });

  return (
    <Group position="center">
      <Button onClick={openConfirmModal}>Open confirm modal</Button>
    </Group>
  );
}

export const confirm: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
