import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
};

describe('@coengageui/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    displayName: '@coengageui/core/Collapse',
  });
});
