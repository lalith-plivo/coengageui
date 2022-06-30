import React from 'react';
import { Tabs } from 'coengageui_core';

const code = `
import { Tabs } from 'coengageui_core';

function Demo() {
  return (
    <Tabs variant="outline">
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs variant="outline">
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}

export const outline: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
