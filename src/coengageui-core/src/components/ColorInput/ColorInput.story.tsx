import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, COENGAGEUI_SIZES, CoengageUIProvider } from '@coengageui/styles';
import { WithinOverlays } from '@coengageui/storybook';
import { ColorInput } from './ColorInput';

const sizes = COENGAGEUI_SIZES.map((size) => (
  <ColorInput
    size={size}
    label="Color input"
    placeholder="Pick color"
    format="rgba"
    style={{ marginTop: 20 }}
  />
));

function ControlledInput() {
  const [value, setValue] = useState('rgba(84, 37, 186, 0.81)');
  return (
    <div style={{ margin: 'auto', maxWidth: 400, marginTop: 15 }}>
      <ColorInput
        label="Controlled input"
        placeholder="Pick color"
        format="rgba"
        value={value}
        onChange={setValue}
        swatches={[
          ...Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6]),
          'transparent',
        ]}
        mb="md"
      />

      <button type="button" onClick={() => setValue('rgba(242, 165, 201, 0.54)')}>
        Set value
      </button>
      <button type="button" onClick={() => setValue('')}>
        Set empty
      </button>
    </div>
  );
}

storiesOf('ColorInput', module)
  .add('Controlled', () => <ControlledInput />)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Within overlays', () => (
    <WithinOverlays>
      <ColorInput
        format="rgba"
        swatches={[
          ...Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6]),
          'transparent',
        ]}
        label="Color"
        placeholder="Color"
        withinPortal={false}
      />
    </WithinOverlays>
  ))
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ ColorInput: { format: 'rgba' } }}>
      <ColorInput />
    </CoengageUIProvider>
  ));
