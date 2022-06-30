import React, { useState } from 'react';
import { Group } from 'coengageui_core';
import { Calendar } from 'coengageui_dates';

const code = `
import { useState } from 'react';
import { Calendar } from 'coengageui_dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return <Calendar multiple value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <Calendar multiple value={value} onChange={setValue} />
    </Group>
  );
}

export const multiple: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
