import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from 'coengageui_spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
      {...otherProps}
    >
      <YourApp />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      shortcut="mod + shift + G"
      closeOnActionTrigger={false}
    />
  );
}

export const closeOnTrigger: CoengageUIDemo = {
  type: 'demo',
  component: Demo,
  code,
};
