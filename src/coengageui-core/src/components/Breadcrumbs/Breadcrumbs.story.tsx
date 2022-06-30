import React from 'react';
import { storiesOf } from '@storybook/react';
import { CoengageUIProvider } from 'coengageui_styles';
import { Breadcrumbs } from './Breadcrumbs';

storiesOf('Breadcrumbs', module).add('Default props on CoengageUIProvider', () => (
  <CoengageUIProvider defaultProps={{ Breadcrumbs: { separator: 'test' } }}>
    <Breadcrumbs>
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
    </Breadcrumbs>
  </CoengageUIProvider>
));
