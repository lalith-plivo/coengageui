import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { Badge, BadgeProps } from './Badge';

const defaultProps: BadgeProps<'div'> = {};

describe('@coengageui/core/Badge', () => {
  itRendersChildren(Badge, defaultProps);
  itIsPolymorphic(Badge, defaultProps);
  itSupportsSystemProps({
    component: Badge,
    props: defaultProps,
    displayName: '@coengageui/core/Badge',
    refType: HTMLDivElement,
  });

  it('renders given left and right section', () => {
    const { container } = render(
      <Badge rightSection="test-right" leftSection="test-left">
        test
      </Badge>
    );
    expect(container.querySelector('.coengageui-Badge-rightSection').textContent).toBe('test-right');
    expect(container.querySelector('.coengageui-Badge-leftSection').textContent).toBe('test-left');
  });
});
