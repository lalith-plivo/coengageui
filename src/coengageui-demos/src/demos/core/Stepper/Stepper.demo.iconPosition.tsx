import React, { useState } from 'react';
import { Stepper } from '@coengageui/core';

const code = `
import { useState } from 'react';
import { Stepper } from '@coengageui/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} breakpoint="sm" onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <Stepper active={active} breakpoint="sm" onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}

export const iconPosition: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
