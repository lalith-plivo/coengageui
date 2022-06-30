import React from 'react';
import { Check } from 'tabler-icons-react';
import { Notification, NotificationProps } from 'coengageui_core';
import { demoBase } from './_demo-base';

function Wrapper(props: NotificationProps) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Notification onClose={() => {}} {...props} />
      <Notification mt="md" icon={<Check size={20} />} onClose={() => {}} {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Notification } from 'coengageui_core';
import { Check } from 'tabler-icons-react';

function Demo() {
  return (
    <>
      <Notification${props}>
        ${children}
      </Notification>

      <Notification icon={<Check size={20} />}${props}>
        ${children}
      </Notification>
    </>
  );
}
`;

export const configurator: CoengageUIDemo = {
  ...demoBase,
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
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
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'disallowClose', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    {
      name: 'title',
      type: 'string',
      initialValue: 'We notify you that',
    },
    {
      name: 'children',
      type: 'string',
      initialValue: 'You are now obligated to give a star to CoengageUI project on GitHub',
    },
  ],
};
