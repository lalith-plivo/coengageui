import React from 'react';
import { RingProgress, Group, RingProgressProps } from 'coengageui_core';

function Wrapper(props: RingProgressProps) {
  return (
    <Group position="center">
      <RingProgress
        {...props}
        sections={[
          { value: 40, color: 'cyan' },
          { value: 15, color: 'orange' },
          { value: 15, color: 'grape' },
        ]}
      />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { RingProgress } from 'coengageui_core';

function Demo() {
  return (
    <RingProgress
     ${props}
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'size', type: 'number', initialValue: 120, step: 10, min: 60, max: 400 },
    { name: 'thickness', type: 'number', initialValue: 12, step: 1, min: 1, max: 40 },
    { name: 'roundCaps', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
