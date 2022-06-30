import React from 'react';
import { Switch, SwitchProps } from '@coengageui/core';

const codeTemplate = (props: string) => `
import { Switch } from '@coengageui/core';

function Demo() {
  return (
    <Switch
     ${props}
    />
  );
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: (props: SwitchProps) => <Switch {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
