import React, { useState } from 'react';
import { DEFAULT_THEME, Text, HueSlider, HueSliderProps } from 'coengageui_core';

function Wrapper(props: HueSliderProps) {
  const [value, onChange] = useState(250);
  return (
    <div style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto' }}>
      <Text mb="xs" ml={-6}>
        Hue value: {value}
      </Text>
      <HueSlider
        style={{ margin: 'auto' }}
        color={DEFAULT_THEME.colors.blue[7]}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

const codeTemplate = (props: string) => `import { useState } from 'react';
import { HueSlider, Text } from 'coengageui_core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange}${props} />
    </>
  );
}`;

export const hueConfigurator: CoengageUIDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};
