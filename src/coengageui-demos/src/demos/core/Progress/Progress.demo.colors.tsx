import React from 'react';
import { Progress } from 'coengageui_core';

const code = `
import { Progress } from 'coengageui_core';

function Demo() {
  return (
    <Progress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}

export const colors: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
