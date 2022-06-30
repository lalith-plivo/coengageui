import React from 'react';
import { Container } from 'coengageui_core';
import { TimeInput } from 'coengageui_dates';

const code = `
import { TimeInput } from 'coengageui_dates';

function Demo() {
  return <TimeInput label="What time is it now?" />;
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" />
    </Container>
  );
}

export const usage: CoengageUIDemo = {
  type: 'demo',
  code,
  component: Demo,
};
