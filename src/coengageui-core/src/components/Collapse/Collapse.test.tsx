import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
};

describe('coengageui_core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    displayName: 'coengageui_core/Collapse',
  });
});
