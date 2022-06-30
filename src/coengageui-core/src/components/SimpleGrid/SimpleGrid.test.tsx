import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('coengageui_core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: 'coengageui_core/SimpleGrid',
    refType: HTMLDivElement,
  });
});
