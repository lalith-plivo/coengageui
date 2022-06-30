import React from 'react';
import { Database } from 'tabler-icons-react';
import { Button, Group, ButtonProps } from 'coengageui_core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button leftIcon={<Database size={14} />} {...props}>
        Connect to database
      </Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Database } from 'tabler-icons-react';
import { Button } from 'coengageui_core';

function Demo() {
  return (
    <Button leftIcon={<Database size={14} />}${props}>
      Connect to database
    </Button>
  );
}
`;

export const loadingConfigurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'loaderPosition',
      capitalize: true,
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
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
  ],
};
