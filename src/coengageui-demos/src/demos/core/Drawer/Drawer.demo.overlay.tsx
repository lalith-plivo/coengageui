import React, { useState } from 'react';
import { Drawer, Group, Button, useCoengageUITheme } from 'coengageui_core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { Drawer, useCoengageUITheme } from 'coengageui_core';

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <Drawer
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {/* Drawer content */}
    </Drawer>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useCoengageUITheme();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const overlay: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
