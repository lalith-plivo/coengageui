import React from 'react';
import { SegmentedControlProps } from 'coengageui_core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo(props: SegmentedControlProps) {
  return (
    <>
      <SegmentedControlWrapper {...props} />
    </>
  );
}

const codeTemplate = (props: string) => `
import { SegmentedControl } from 'coengageui_core';

function Demo() {
  return <SegmentedControl${props} />;
}
`;

export const fullWidth: CoengageUIDemo = {
  type: 'configurator',
  component: Demo,
  codeTemplate,
  configurator: [
    { name: 'fullWidth', type: 'boolean', defaultValue: false },
    {
      name: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
  ],
};
