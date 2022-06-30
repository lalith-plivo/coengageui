import React from 'react';
import { Button, ButtonProps, Group } from 'coengageui_core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button {...props} />
    </Group>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Button } from 'coengageui_core';

function Demo() {
  return (
    <Button${props}>
      ${children}
    </Button>
  );
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
        { label: 'subtle', value: 'subtle' },
        { label: 'danger_outline', value: 'danger_outline' },
        { label: 'danger', value: 'danger' },
      ],
      initialValue: 'filled',
      defaultValue: 'filled',
    },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'children', type: 'string', initialValue: 'Settings' },
  ],
};
