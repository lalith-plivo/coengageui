import React from 'react';
import { Group, ActionIcon, useCoengageUIColorScheme } from 'coengageui_core';
import { Sun, MoonStars } from 'tabler-icons-react';

const code = `
import { ActionIcon, useCoengageUIColorScheme } from 'coengageui_core';
import { Sun, MoonStars } from 'tabler-icons-react';

function Demo() {
  const { colorScheme, toggleColorScheme } = useCoengageUIColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}
`;

function Demo() {
  const { colorScheme, toggleColorScheme } = useCoengageUIColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group position="center">
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
}

export const darkThemeToggle: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
