import React from 'react';
import { itSupportsClassName } from 'coengageui_tests';
import { MediaQuery, MediaQueryProps } from './MediaQuery';

const defaultProps: MediaQueryProps = {
  styles: { fontWeight: 700 },
  children: <span>test-children</span>,
};

describe('coengageui_core/MediaQuery', () => {
  itSupportsClassName(MediaQuery, defaultProps);

  it('has correct displayName', () => {
    expect(MediaQuery.displayName).toStrictEqual('coengageui_core/MediaQuery');
  });
});
