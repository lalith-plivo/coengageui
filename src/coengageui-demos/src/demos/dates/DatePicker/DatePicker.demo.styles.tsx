import React from 'react';
import { useCoengageUITheme } from 'coengageui_core';
import { DatePicker } from 'coengageui_dates';

const code = `
import { useCoengageUITheme } from 'coengageui_core';
import { DatePicker } from 'coengageui_dates';

function Demo() {
  const theme = useCoengageUITheme();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
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
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </div>
  );
}

export const styles: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
