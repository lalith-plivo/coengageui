import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Group } from 'coengageui_core';
import { Calendar } from 'coengageui_dates';

const code = `
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from 'coengageui_dates';

function Demo() {
  const [value, setValue] = useState(null);

  return (
    <Calendar
      value={value}
      onChange={setValue}
      minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
      maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()}
        maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()}
      />
    </Group>
  );
}

export const boundaries: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
