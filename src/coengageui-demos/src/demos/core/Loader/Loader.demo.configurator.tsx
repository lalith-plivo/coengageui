import React from 'react';
import { Loader, LoaderProps, Group } from '@coengageui/core';

function Wrapper(props: LoaderProps) {
  return (
    <Group position="center">
      <Loader {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Loader } from '@coengageui/core';

function Demo() {
  return <Loader${props} />;
}
`;

export const configurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'oval',
      defaultValue: 'oval',
      data: [
        { value: 'oval', label: 'Oval' },
        { value: 'bars', label: 'Bars' },
        { value: 'dots', label: 'Dots' },
      ],
    },
  ],
};
