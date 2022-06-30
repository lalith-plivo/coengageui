import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps } from '@coengageui/tests';
import { Text } from '../Text/Text';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const defaultProps: BreadcrumbsProps = {
  children: [
    { title: 'CoengageUI', href: '#' },
    { title: 'CoengageUI hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item) => (
    <Text<'a'> variant="link" component="a" href={item.href} key={item.title}>
      {item.title}
    </Text>
  )),
};

describe('@coengageui/core/Breadcrumbs', () => {
  itSupportsSystemProps({
    component: Breadcrumbs,
    props: defaultProps,
    displayName: '@coengageui/core/Breadcrumbs',
    refType: HTMLDivElement,
  });

  it('renders correct amount of children and separators', () => {
    const { container } = render(<Breadcrumbs {...defaultProps} />);
    expect(container.querySelectorAll('.coengageui-Breadcrumbs-breadcrumb')).toHaveLength(3);
    expect(container.querySelectorAll('.coengageui-Breadcrumbs-separator')).toHaveLength(2);
  });

  it('accepts separator from props', () => {
    render(<Breadcrumbs separator="test-separator" {...defaultProps} />);
    expect(screen.getAllByText('test-separator')).toHaveLength(2);
  });
});
