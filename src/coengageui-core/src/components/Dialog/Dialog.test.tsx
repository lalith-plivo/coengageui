import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itRendersChildren, itSupportsRef, itSupportsSystemProps } from 'coengageui_tests';
import { Dialog, CoengageUIDialog, DialogProps } from './Dialog';

const defaultProps: DialogProps = {
  opened: true,
  transitionDuration: 0,
  withCloseButton: true,
};

describe('coengageui_core/Dialog', () => {
  itRendersChildren(CoengageUIDialog, defaultProps);
  itSupportsRef(Dialog, defaultProps, HTMLDivElement);
  itSupportsSystemProps({ component: CoengageUIDialog, props: defaultProps });

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<CoengageUIDialog opened withCloseButton onClose={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(Dialog.displayName).toStrictEqual('coengageui_core/Dialog');
  });
});
