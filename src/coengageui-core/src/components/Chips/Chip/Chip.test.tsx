import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  itRendersChildren,
  itSupportsSystemProps,
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsWrapperProps,
  itHandlesBooleanState,
  itSupportsFocusEvents,
} from 'coengageui_tests';
import { Chip, ChipProps } from './Chip';

const defaultProps: ChipProps = {
  value: 'test-value',
  children: 'test-chip',
};

describe('coengageui_core/Chip', () => {
  checkAccessibility([<Chip {...defaultProps} />]);
  itRendersChildren(Chip, defaultProps);
  itConnectsLabelAndInput(Chip, defaultProps);
  itSupportsWrapperProps(Chip, defaultProps);
  itHandlesBooleanState(Chip, defaultProps);
  itSupportsFocusEvents(Chip, defaultProps, 'input');
  itSupportsSystemProps({
    component: Chip,
    props: defaultProps,
    displayName: 'coengageui_core/Chip',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('displays checked icon when input is checked', () => {
    const { container: checked } = render(<Chip {...defaultProps} checked />);
    const { container: notChecked } = render(<Chip {...defaultProps} checked={false} />);
    expect(checked.querySelectorAll('.coengageui-Chip-checkIcon')).toHaveLength(1);
    expect(notChecked.querySelectorAll('.coengageui-Chip-checkIcon')).toHaveLength(0);
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    render(<Chip {...defaultProps} disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('changes input type based on prop', () => {
    render(<Chip {...defaultProps} type="radio" />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });
});
