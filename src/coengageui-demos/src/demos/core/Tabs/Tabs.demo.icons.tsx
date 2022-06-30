import React from 'react';
import { Settings, MessageCircle, Coin } from 'tabler-icons-react';
import { Tabs } from '@coengageui/core';

const code = `
import { Tabs } from '@coengageui/core';
import { Settings, MessageCircle, Coin } from 'tabler-icons-react';

function Demo() {
  return (
    <Tabs>
      <Tabs.Tab label="Chat" icon={<MessageCircle size={14} />}>Chat here</Tabs.Tab>
      <Tabs.Tab label="Settings" icon={<Settings size={14} />}>Settings</Tabs.Tab>
      <Tabs.Tab icon={<Coin size={14} />}>Get money!</Tabs.Tab>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs styles={{ body: { paddingTop: 5 } }}>
      <Tabs.Tab label="Chat" icon={<MessageCircle size={14} />}>
        Chat here
      </Tabs.Tab>
      <Tabs.Tab label="Settings" icon={<Settings size={14} />}>
        Settings
      </Tabs.Tab>
      <Tabs.Tab icon={<Coin size={14} />}>Get money!</Tabs.Tab>
    </Tabs>
  );
}

export const icons: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
