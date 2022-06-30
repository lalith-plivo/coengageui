import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from '@coengageui/styles';
import { Burger } from './Burger';

storiesOf('Burger', module).add('Default props on CoengageUIProvider', () => (
  <CoengageUIProvider defaultProps={{ Burger: { color: 'red' } }}>
    <Burger opened={false} />
  </CoengageUIProvider>
));
