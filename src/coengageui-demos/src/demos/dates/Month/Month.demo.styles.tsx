import React from 'react';
import { Group, useCoengageUITheme } from 'coengageui_core';
import { Month } from 'coengageui_dates';

const code = `
import { useCoengageUITheme } from 'coengageui_core';
import { Month } from 'coengageui_dates';

function Demo() {
  const theme = useCoengageUITheme();
  return (
    <Month
      month={new Date(2021, 7)}
      dayStyle={(date) =>
        date.getDay() === 5 && date.getDate() === 13
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  );
}
`;

function Demo() {
  const theme = useCoengageUITheme();
  return (
    <Group position="center">
      <Month
        month={new Date(2021, 7)}
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </Group>
  );
}

export const styles: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
