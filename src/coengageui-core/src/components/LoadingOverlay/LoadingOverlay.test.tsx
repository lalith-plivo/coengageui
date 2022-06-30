import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@coengageui/tests';
import { LoadingOverlay, LoadingOverlayProps } from './LoadingOverlay';

const defaultProps: LoadingOverlayProps = {
  visible: true,
};

describe('@coengageui/core/LoadingOverlay', () => {
  itSupportsSystemProps({
    component: LoadingOverlay,
    props: defaultProps,
    displayName: '@coengageui/core/LoadingOverlay',
    refType: HTMLDivElement,
  });

  it('renders based on visible prop', () => {
    const { container: notVisible } = render(<LoadingOverlay visible={false} />);
    const { container: visible } = render(<LoadingOverlay visible />);
    expect(notVisible.querySelector('.coengageui-LoadingOverlay-root')).toBe(null);
    expect(visible.querySelector('.coengageui-LoadingOverlay-root')).toBeInTheDocument();
  });
});
