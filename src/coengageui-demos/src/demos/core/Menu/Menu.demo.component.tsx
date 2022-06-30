import React from 'react';
import { ExternalLink } from 'tabler-icons-react';
import { Menu, Group } from '@coengageui/core';

const code = `
import { Menu } from '@coengageui/core';
import { ExternalLink } from 'tabler-icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Item component="a" href="https://coengage.dev">
        CoengageUI website
      </Menu.Item>

      <Menu.Item
        icon={<ExternalLink size={14} />}
        component="a"
        href="https://coengage.dev"
        target="_blank"
      >
        External link
      </Menu.Item>
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu>
        <Menu.Item component="a" href="https://coengage.dev">
          CoengageUI website
        </Menu.Item>
        <Menu.Item
          icon={<ExternalLink size={14} />}
          component="a"
          href="https://coengage.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu>
    </Group>
  );
}

export const component: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
