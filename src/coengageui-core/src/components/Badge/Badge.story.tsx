import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from 'coengageui_storybook';
import { CoengageUIProvider } from 'coengageui_styles';
import { Badge } from './Badge';

storiesOf('Badge', module)
  .add('Styles API', () => (
    <StylesAPIStory
      name="Badge"
      component={Badge}
      props={{ children: 'Badge', rightSection: '$', leftSection: '$' }}
    />
  ))
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ Badge: { color: 'red', variant: 'filled' } }}>
      <Badge>Default props badge</Badge>
    </CoengageUIProvider>
  ))
  .add('Default radius on CoengageUIProvider', () => (
    <CoengageUIProvider theme={{ defaultRadius: 0 }}>
      <Badge>Default radius badge</Badge>
    </CoengageUIProvider>
  ));
