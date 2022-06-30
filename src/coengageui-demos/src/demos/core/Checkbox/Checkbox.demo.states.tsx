import React from 'react';
import { Checkbox, Group } from 'coengageui_core';

const code = `
import { Checkbox } from 'coengageui_core';

function Demo() {
  return (
    <>
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </>
  );
}
`;

function Demo() {
  return (
    <Group direction="column">
      <Checkbox checked={false} label="Default checkbox" />
      <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked label="Checked checkbox" />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Group>
  );
}

export const states: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
