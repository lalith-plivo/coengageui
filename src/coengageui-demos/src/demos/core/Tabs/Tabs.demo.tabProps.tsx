import React from 'react';
import { Tabs } from 'coengageui_core';

const code = `
import { Tabs } from 'coengageui_core';

function Demo() {
  return (
    <Tabs>
      <Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
        First tab content
      </Tabs.Tab>
      <Tabs.Tab label="Not allowed" disabled>
        https://youtu.be/dQw4w9WgXcQ
      </Tabs.Tab>
      <Tabs.Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
        Yes, delete this
      </Tabs.Tab>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs>
      <Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
        First tab content
      </Tabs.Tab>
      <Tabs.Tab label="Not allowed" disabled>
        https://youtu.be/dQw4w9WgXcQ
      </Tabs.Tab>
      <Tabs.Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
        Yes, delete this
      </Tabs.Tab>
    </Tabs>
  );
}

export const tabProps: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
