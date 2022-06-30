import React, { useState } from 'react';
import { Paper, Button, Group, useCoengageUITheme } from 'coengageui_core';
import { useClickOutside } from 'coengageui_hooks';

const code = `
import { useState } from 'react';
import { Paper, Button } from 'coengageui_core';
import { useClickOutside } from 'coengageui_hooks';

function Demo() {
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), ['mouseup', 'touchend']);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      {opened && (
        <Paper ref={ref} shadow="sm">
          <span>Click outside to close</span>
        </Paper>
      )}
    </>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  const [opened, setOpened] = useState(false);
  const ref = useClickOutside(() => setOpened(false), ['mouseup', 'touchend']);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Group position="center">
          <Button onClick={() => setOpened(true)}>Open dropdown</Button>
        </Group>

        {opened && (
          <Paper
            ref={ref}
            shadow="sm"
            sx={{
              width: 300,
              height: 60,
              position: 'absolute',
              top: 0,
              left: 'calc(50% - 150px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            <span>Click outside to close</span>
          </Paper>
        )}
      </div>
    </>
  );
}

export const useClickOutsideEvents: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
