import React from 'react';
import { AlertCircle } from 'tabler-icons-react';
import { Input, Tooltip } from '@coengageui/core';

const code = `
import { Input, Tooltip } from '@coengageui/core';
import { AlertCircle } from 'tabler-icons-react';

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end">
      <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}
`;

function Demo() {
  const rightSection = (
    <Tooltip label="We do not send spam" position="top" placement="end">
      <AlertCircle size={16} style={{ display: 'block', opacity: 0.5 }} />
    </Tooltip>
  );

  return <Input placeholder="Your email" rightSection={rightSection} />;
}

export const tooltip: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
