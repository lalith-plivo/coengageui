import dayjs from 'dayjs';
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { COENGAGEUI_SIZES } from 'coengageui_core';
import { TimeInput } from './TimeInput';

const sizes = COENGAGEUI_SIZES.map((size) => (
  <TimeInput label={size} size={size} key={size} style={{ marginTop: 30 }} />
));

function Controlled() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <p>Time value: {value?.toISOString()}</p>
      <TimeInput value={value} onChange={onChange} label="Controlled" />
      <button type="button" onClick={() => onChange(dayjs(new Date()).add(30, 'minutes').toDate())}>
        set date
      </button>
    </>
  );
}

storiesOf('TimeInput', module)
  .add('Controlled', () => (
    <div style={{ width: 400, padding: 40 }}>
      <Controlled />
    </div>
  ))
  .add('Sizes', () => <div style={{ width: 400, padding: 40 }}>{sizes}</div>);
