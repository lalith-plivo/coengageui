import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@coengageui/storybook';
import { CoengageUIProvider } from '@coengageui/styles';
import { Avatar } from './Avatar';

storiesOf('Avatar', module)
  .add('Styles API', () => <StylesAPIStory name="Avatar" component={Avatar} props={{}} />)
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ Avatar: { color: 'cyan' } }}>
      <Avatar>MJ</Avatar>
    </CoengageUIProvider>
  ))
  .add('Default radius on CoengageUIProvider', () => (
    <CoengageUIProvider theme={{ defaultRadius: 0 }}>
      <Avatar>MJ</Avatar>
    </CoengageUIProvider>
  ));
