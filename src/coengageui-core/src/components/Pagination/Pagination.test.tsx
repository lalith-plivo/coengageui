import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from 'coengageui_tests';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getItemAriaLabel: () => 'test-label',
};

describe('coengageui_core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: 'coengageui_core/Pagination',
    refType: HTMLDivElement,
  });
});
