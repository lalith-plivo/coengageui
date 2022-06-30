import React from 'react';
import { CircleX } from 'tabler-icons-react';
import { Stepper } from 'coengageui_core';

const code = `
import { Stepper } from 'coengageui_core';
import { CircleX } from 'tabler-icons-react';

function Demo() {
  return (
    <Stepper active={2} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<CircleX />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  return (
    <Stepper active={2} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<CircleX />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const stepColor: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
