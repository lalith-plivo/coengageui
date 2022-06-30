import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsSystemProps, itSupportsFocusEvents } from '@coengageui/tests';
import { CloseButton, CloseButtonProps } from './CloseButton';

const defaultProps: CloseButtonProps = {};

describe('@coengageui/core/CloseButton', () => {
  checkAccessibility([<CloseButton aria-label="test" />, <CloseButton title="test" />]);
  itSupportsFocusEvents(CloseButton, defaultProps, '.coengageui-ActionIcon-root');
  itSupportsSystemProps({
    component: CloseButton as any,
    props: defaultProps,
    displayName: '@coengageui/core/CloseButton',
    refType: HTMLButtonElement,
  });

  it('sets width and height on CloseIcon based on iconSize prop', () => {
    const { container } = render(<CloseButton iconSize={45} />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('45');
    expect(svg.getAttribute('height')).toBe('45');
  });
});
