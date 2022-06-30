import React from 'react';
import { Group } from '@coengageui/core';
import dayjs from 'dayjs';
import { Month } from '@coengageui/dates';

const code = `
import dayjs from 'dayjs';
import { Month } from '@coengageui/dates';

function Demo() {
  return (
    <Month
      month={new Date()}
      range={[
        dayjs(new Date()).startOf('month').toDate(),
        dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month
        month={new Date()}
        range={[
          dayjs(new Date()).startOf('month').toDate(),
          dayjs(new Date()).startOf('month').add(4, 'days').toDate(),
        ]}
      />
    </Group>
  );
}

export const range: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
