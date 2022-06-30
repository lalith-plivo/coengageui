import React, { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { useCoengageUITheme, ColorSwatch, Group } from 'coengageui_core';

const code = `
import { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, useCoengageUITheme } from 'coengageui_core';

function Demo() {
  const theme = useCoengageUITheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://coengage.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://coengage.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}

export const component: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
