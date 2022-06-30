import 'dayjs/locale/ru';
import React from 'react';
import { DatePicker } from 'coengageui_dates';

const code = `
import 'dayjs/locale/ru';
import { DatePicker } from 'coengageui_dates';

function Demo() {
  return (
    <DatePicker
      locale="ru"
      placeholder="Выберите дату"
      label="Дата события"
      defaultValue={new Date()}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        locale="ru"
        placeholder="Выберите дату"
        label="Дата события"
        defaultValue={new Date()}
      />
    </div>
  );
}

export const localization: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
