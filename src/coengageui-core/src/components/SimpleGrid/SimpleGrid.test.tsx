import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@coengageui/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@coengageui/core/SimpleGrid',
    refType: HTMLDivElement,
  });
});
