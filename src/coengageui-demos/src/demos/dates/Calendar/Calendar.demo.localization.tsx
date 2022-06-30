import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from 'coengageui_core';
import { Calendar } from 'coengageui_dates';

const code = `
import 'dayjs/locale/ru';
import { useState } from 'react';
import { Calendar } from 'coengageui_dates';

function Demo() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} locale="ru" />;
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

export const localization: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
