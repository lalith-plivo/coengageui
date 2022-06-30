import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from 'coengageui_tests';
import { DatePicker, DatePickerProps } from './DatePicker';

const defaultProps: DatePickerProps = {};

describe('coengageui_dates/DatePicker', () => {
  itSupportsInputProps(DatePicker, defaultProps, 'DatePicker');
  itSupportsFocusEvents(DatePicker, defaultProps, 'input');
  checkAccessibility([<DatePicker label="date picker" />]);
  itSupportsSystemProps({
    component: DatePicker,
    props: defaultProps,
    displayName: 'coengageui_dates/DatePicker',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    render(<DatePicker value={new Date(2021, 6, 13)} inputFormat="MM/YY" />);
    expect(screen.getByRole('textbox')).toHaveValue('07/21');
  });
});
