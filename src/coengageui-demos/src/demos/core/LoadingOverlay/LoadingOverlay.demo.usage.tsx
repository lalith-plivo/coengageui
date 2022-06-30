import React, { useState } from 'react';
import { LoadingOverlay, Button, Group, useCoengageUITheme } from 'coengageui_core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';
import { demoBase } from './_demo-base';

const code = `
import { useState } from 'react';
import { LoadingOverlay, Button, Group } from 'coengageui_core';

function Demo() {
  const [visible, setVisible] = useState(false);

  // Note that position: relative is required
  return (
    <>
      <div style={{ width: 400, position: 'relative' }}>
        <LoadingOverlay visible={visible} />
        {/* ...other content */}
      </div>

      <Group position="center">
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;

export function Demo() {
  const [visible, setVisible] = useState(false);
  const theme = useCoengageUITheme();

  return (
    <>
      <div
        style={{
          borderRadius: 4,
          position: 'relative',
          margin: 'auto',
        }}
      >
        <LoadingOverlay visible={visible} zIndex={1000} style={{ borderRadius: 4 }} />
        <AuthenticationForm noSubmit noShadow={theme.colorScheme === 'dark'} />
      </div>

      <Group position="center" style={{ marginTop: 20 }}>
        <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const usage: CoengageUIDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
