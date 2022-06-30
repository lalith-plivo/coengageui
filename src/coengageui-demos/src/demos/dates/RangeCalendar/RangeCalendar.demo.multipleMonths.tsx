import React, { useState } from 'react';
import { Group, MediaQuery, Text } from '@coengageui/core';
import { RangeCalendar } from '@coengageui/dates';

const code = `
import { RangeCalendar } from '@coengageui/dates';

function Demo() {
  return <RangeCalendar amountOfMonths={2} />;
}
`;

function Demo() {
  const [value, setValue] = useState<[Date, Date]>([new Date(2021, 11, 1), new Date(2022, 0, 15)]);

  return (
    <>
      <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
        <Group position="center">
          <RangeCalendar
            amountOfMonths={2}
            value={value}
            onChange={setValue}
            initialMonth={new Date(2021, 11, 1)}
          />
        </Group>
      </MediaQuery>
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <Text align="center">Demo is not available, increase viewport size to see it</Text>
      </MediaQuery>
    </>
  );
}

export const multipleMonths: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
