import React from 'react';
import { AlertCircle } from 'tabler-icons-react';
import { Alert } from 'coengageui_core';

function Wrapper(props: React.ComponentPropsWithoutRef<typeof Alert>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert {...props} icon={<AlertCircle size={16} />} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Alert } from 'coengageui_core';
import { AlertCircle } from 'tabler-icons-react';

function Demo() {
  return (
    <Alert icon={<AlertCircle size={16} />}${props}>
      ${children}
    </Alert>
  );
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'title', type: 'string', initialValue: 'Bummer!' },
    {
      name: 'children',
      type: 'string',
      initialValue:
        'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
    },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'withCloseButton', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'type',
      type: 'segmented',
      data: [
        { label: 'light', value: 'light' },
        { label: 'filled', value: 'filled' },
        { label: 'outline', value: 'outline' },
      ],
      initialValue: 'light',
      defaultValue: 'light',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'info', value: 'info' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
        { label: 'danger', value: 'danger' },
      ],
      initialValue: 'info',
      defaultValue: 'info',
    },
  ],
};
