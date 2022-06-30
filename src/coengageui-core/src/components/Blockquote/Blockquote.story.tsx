import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from 'coengageui_styles';
import { StylesAPIStory } from 'coengageui_storybook';
import { Blockquote } from './Blockquote';

storiesOf('Blockquote', module)
  .add('Styles API', () => (
    <StylesAPIStory
      component={Blockquote}
      name="Blockquote"
      props={{ children: 'Blockquote', cite: 'cite' }}
    />
  ))
  .add('Default props on CoengageUIProvider', () => (
    <CoengageUIProvider defaultProps={{ Blockquote: { color: 'orange' } }}>
      <Blockquote cite="– Cite">Hello there</Blockquote>
    </CoengageUIProvider>
  ));
