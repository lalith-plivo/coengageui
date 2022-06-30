import React from 'react';
import { Radio, RadioGroup, RadioProps } from '@coengageui/core';

const getSizes = (props?: RadioProps) =>
  (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
    <RadioGroup size={size} key={size}>
      <Radio
        value={size}
        style={{ marginTop: index === 0 ? 0 : 15 }}
        label={`${size} size radio`}
        {...props}
      />
    </RadioGroup>
  ));

function Demo() {
  return <>{getSizes()}</>;
}

export const sizes: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
};
