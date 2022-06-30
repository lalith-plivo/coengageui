import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@coengageui/tests';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getItemAriaLabel: () => 'test-label',
};

describe('@coengageui/core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: '@coengageui/core/Pagination',
    refType: HTMLDivElement,
  });
});
