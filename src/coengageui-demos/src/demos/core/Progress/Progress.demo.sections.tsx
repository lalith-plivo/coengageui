import React from 'react';
import { Progress } from 'coengageui_core';

const code = `
import { Progress } from 'coengageui_core';

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}

export const sections: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
