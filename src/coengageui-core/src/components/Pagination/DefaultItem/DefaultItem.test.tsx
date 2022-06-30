import React from 'react';
import { screen, render } from '@testing-library/react';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@coengageui/tests';
import { DefaultItem, PaginationItemProps } from './DefaultItem';

const defaultProps: PaginationItemProps = {
  page: 1,
};

describe('@coengageui/core/Pagination/DefaultItem', () => {
  itSupportsClassName(DefaultItem, defaultProps);
  itSupportsOthers(DefaultItem, defaultProps);
  itSupportsStyle(DefaultItem, defaultProps);

  it('number page renders number as child', () => {
    render(<DefaultItem page={11} />);
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toStrictEqual('@coengageui/core/Pagination/DefaultItem');
  });
});
