import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Alert, AlertProps } from './Alert';

const defaultProps: AlertProps = {
  title: 'test-title',
  children: 'test-alert',
  withCloseButton: true,
  closeButtonLabel: 'test-close',
};

describe('coengageui_core/Alert', () => {
  itRendersChildren(Alert, defaultProps);
  checkAccessibility([<Alert {...defaultProps} />]);
  itSupportsSystemProps({
    component: Alert,
    props: defaultProps,
    displayName: 'coengageui_core/Alert',
    refType: HTMLDivElement,
  });

  it('renders close button based on withCloseButton prop', () => {
    const { container: withCloseButton } = render(<Alert {...defaultProps} withCloseButton />);
    const { container: withoutCloseButton } = render(
      <Alert {...defaultProps} withCloseButton={false} />
    );

    expect(withCloseButton.querySelector('.coengageui-Alert-closeButton')).toBeInTheDocument();
    expect(withoutCloseButton.querySelectorAll('.coengageui-Alert-closeButton')).toHaveLength(0);
  });

  it('calls onClose when CloseButton is clicked', () => {
    const spy = jest.fn();
    render(
      <Alert title="test" withCloseButton onClose={spy}>
        test
      </Alert>
    );

    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders given title', () => {
    render(<Alert title="test-title">test-alert</Alert>);
    expect(screen.getByText('test-title')).toBeInTheDocument();
  });

  it('does not render title if title prop was not passed', () => {
    const { container } = render(<Alert>test-alert</Alert>);
    expect(container.querySelectorAll('.coengageui-Alert-title')).toHaveLength(0);
  });

  it('renders with the alert role', () => {
    const rendered = render(
      <Alert id="my-alert" title="My Alert">
        test-alert
      </Alert>
    );
    const alert = rendered.getByRole('alert');
    expect(alert).toHaveAccessibleName('My Alert');
  });

  it('has an accessible name even when not having an ID', () => {
    const rendered = render(<Alert title="My Alert">test-alert</Alert>);
    const alert = rendered.getByRole('alert');
    expect(alert).toHaveAccessibleName('My Alert');
  });
});
