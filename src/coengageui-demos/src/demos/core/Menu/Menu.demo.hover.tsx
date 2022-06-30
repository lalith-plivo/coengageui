import React from 'react';
import { Menu, Group } from 'coengageui_core';
import { menuItems } from './_menu-items';

const code = `
import { Menu } from 'coengageui_core';

function Demo() {
  return (
    <Menu trigger="hover" delay={500}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" delay={500}>
        {menuItems}
      </Menu>
    </Group>
  );
}

export const hover: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
