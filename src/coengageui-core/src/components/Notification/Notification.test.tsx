import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Notification, NotificationProps } from './Notification';

const defaultProps: NotificationProps = {
  icon: 'test-icon',
  title: 'test-notification',
  closeButtonProps: { title: 'test-close' },
};

describe('@coengageui/core/Notification', () => {
  itRendersChildren(Notification, defaultProps);
  checkAccessibility([<Notification {...defaultProps} />]);
  itSupportsSystemProps({
    component: Notification,
    props: defaultProps,
    displayName: '@coengageui/core/Notification',
    refType: HTMLDivElement,
  });

  it('does not render close button if disallowClose is true', () => {
    const { container: allowClose } = render(<Notification {...defaultProps} />);
    const { container: disallowClose } = render(<Notification {...defaultProps} disallowClose />);
    expect(allowClose.querySelectorAll('.coengageui-Notification-closeButton')).toHaveLength(1);
    expect(disallowClose.querySelectorAll('.coengageui-Notification-closeButton')).toHaveLength(0);
  });

  it('renders given icon', () => {
    const { container: withIcon } = render(<Notification {...defaultProps} icon="test-icon" />);
    const { container: withoutIcon } = render(<Notification {...defaultProps} icon={null} />);
    expect(withIcon.querySelector('.coengageui-Notification-icon').textContent).toBe('test-icon');
    expect(withoutIcon.querySelector('.coengageui-Notification-icon')).toBe(null);
  });

  it('displays loader when loading prop is true', () => {
    const { container: loading } = render(<Notification {...defaultProps} loading />);
    const { container: notLoading } = render(<Notification {...defaultProps} loading={false} />);
    expect(loading.querySelector('.coengageui-Notification-loader')).toBeInTheDocument();
    expect(loading.querySelector('.coengageui-Notification-icon')).toBe(null);
    expect(notLoading.querySelector('.coengageui-Notification-loader')).toBe(null);
    expect(notLoading.querySelector('.coengageui-Notification-icon')).toBeInTheDocument();
    expect(notLoading.querySelector('.coengageui-Notification-icon').textContent).toBe('test-icon');
  });

  it('renders given title', () => {
    const { container: withTitle } = render(<Notification {...defaultProps} title="test-title" />);
    const { container: withoutTitle } = render(<Notification {...defaultProps} title={null} />);
    expect(withTitle.querySelector('.coengageui-Notification-title').textContent).toBe('test-title');
    expect(withoutTitle.querySelectorAll('.coengageui-Notification-title')).toHaveLength(0);
  });
});
