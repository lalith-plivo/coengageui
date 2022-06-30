import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from '@coengageui/styles';
import { Code } from './Code';

storiesOf('Code', module).add('Default props on CoengageUIProvider', () => (
  <CoengageUIProvider defaultProps={{ Code: { color: 'red' } }}>
    <Code>Default props</Code>
  </CoengageUIProvider>
));
