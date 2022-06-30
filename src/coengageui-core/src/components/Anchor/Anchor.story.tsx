import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from '@coengageui/styles';
import { StylesAPIStory } from '@coengageui/storybook';
import { Anchor } from './Anchor';

storiesOf('Anchor', module)
  .add('Styles API', () => (
    <StylesAPIStory component={Anchor} name="Anchor" props={{ children: 'Anchor' }} />
  ))
  .add('Custom component', () => (
    <div style={{ padding: 40 }}>
      <Anchor component="button" type="button">
        Anchor as button
      </Anchor>

      <br />

      <Anchor component="span">Anchor as span</Anchor>
    </div>
  ))
  .add('Text props', () => (
    <div style={{ padding: 40 }}>
      <Anchor size="lg" weight={700} color="red">
        Text props
      </Anchor>
    </div>
  ))
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ Anchor: { weight: 900 } }}>
      <Anchor>Some link</Anchor>
    </CoengageUIProvider>
  ));
