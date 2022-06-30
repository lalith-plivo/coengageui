import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
} from 'coengageui_tests';
import { Day, DayProps } from './Day';

const defaultProps: DayProps = {
  value: new Date(),
  selected: true,
  outside: false,
  weekend: false,
  disabled: false,
  hasValue: true,
  firstInRange: false,
  lastInRange: false,
  inRange: false,
  fullWidth: false,
  firstInMonth: false,
  size: 'sm' as const,
  onKeyDown: () => {},
  onMouseEnter: () => {},
};

describe('coengageui_core/Month/Day', () => {
  checkAccessibility([<Day {...defaultProps} />]);
  itSupportsClassName(Day, defaultProps);
  itSupportsStyle(Day, defaultProps);
  itSupportsOthers(Day, defaultProps);
  itSupportsRef(Day, defaultProps, HTMLButtonElement);

  it('calls onMouseEnter with date and event', () => {
    const spy = jest.fn();
    render(<Day {...defaultProps} onMouseEnter={spy} />);
    userEvent.hover(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(defaultProps.value, expect.anything());
  });

  it('sets data-coengageui-stop-propagation attribute', () => {
    render(<Day {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-coengageui-stop-propagation', 'true');
  });

  it('render correct label with given date value', () => {
    render(<Day {...defaultProps} />);
    expect(screen.getByRole('button').textContent).toBe(defaultProps.value.getDate().toString());
  });

  it('has correct displayName', () => {
    expect(Day.displayName).toStrictEqual('coengageui_core/Day');
  });

  it('renders correctly with a renderDay function', () => {
    const renderDay = (date: Date) => (
      <div>
        <span>{date.getDate()}</span>
        <span>Rendered custom day</span>
      </div>
    );
    render(<Day {...defaultProps} renderDay={renderDay} />);

    const today = new Date().getDate();
    expect(screen.getByText(today)).toBeInTheDocument();
    expect(screen.getByText('Rendered custom day')).toBeInTheDocument();
  });
});
