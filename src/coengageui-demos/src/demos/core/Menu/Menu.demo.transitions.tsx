import React from 'react';
import { Group, Menu } from '@coengageui/core';
import { menuItems } from './_menu-items';

const code = `
import { Menu } from '@coengageui/core';

function Demo() {
  return (
    <Menu
      transition="rotate-right"
      transitionDuration={100}
      transitionTimingFunction="ease"
    >
      {/* Menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transition="rotate-right" transitionDuration={100} transitionTimingFunction="ease">
        {menuItems}
      </Menu>
    </Group>
  );
}

export const transitions: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
