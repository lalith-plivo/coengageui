import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from '@coengageui/styles';
import { StylesAPIStory } from '@coengageui/storybook';
import { ActionIcon } from './ActionIcon';

storiesOf('ActionIcon', module)
  .add('Styles API', () => (
    <StylesAPIStory name="ActionIcon" component={ActionIcon} props={{ children: '$' }} />
  ))
  .add('Default radius on theme', () => (
    <CoengageUIProvider theme={{ defaultRadius: 0 }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </CoengageUIProvider>
  ))
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ ActionIcon: { color: 'blue', radius: 'xl' } }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </CoengageUIProvider>
  ));
