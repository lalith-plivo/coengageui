import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from '@coengageui/styles';
import { Card } from './Card';

storiesOf('Card', module)
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ Card: { shadow: 'xl', padding: 0, withBorder: true } }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Default props card
      </Card>
    </CoengageUIProvider>
  ))
  .add('Default radius on CoengageUIProvider', () => (
    <CoengageUIProvider theme={{ defaultRadius: 'xl' }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50} withBorder>
        Default radius card
      </Card>
    </CoengageUIProvider>
  ));
