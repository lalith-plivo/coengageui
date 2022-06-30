import React from 'react';
import { Tooltip, TooltipProps, Group, Button } from '@coengageui/core';

const Wrapper = (props: TooltipProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <Tooltip opened {...props}>
        <Button variant="outline" color="gray" size="xl">
          With tooltip
        </Button>
      </Tooltip>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { Tooltip, Button } from '@coengageui/core';

function Demo() {
  return (
    <Tooltip
      opened
     ${props}
    >
      <Button variant="outline" color="gray" size="xl">
        With tooltip
      </Button>
    </Tooltip>
  );
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Tooltip',
    },
    {
      name: 'position',
      type: 'select',
      data: [
        { label: 'top', value: 'top' },
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'bottom', value: 'bottom' },
      ],
      initialValue: 'top',
      defaultValue: 'top',
    },
    {
      name: 'placement',
      type: 'segmented',
      data: [
        { label: 'start', value: 'start' },
        { label: 'center', value: 'center' },
        { label: 'end', value: 'end' },
      ],
      initialValue: 'center',
      defaultValue: 'center',
    },
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { label: 'dark', value: 'dark' },
        { label: 'light', value: 'light' },
      ],
      initialValue: 'dark',
      defaultValue: 'dark',
    },
    { name: 'withArrow', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
