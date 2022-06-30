import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsSystemProps,
  renderWithAct,
} from 'coengageui_tests';
import { PinInput } from './PinInput';

const defaultProps = {};

describe('coengageui_core/PinInput', () => {
  checkAccessibility([<PinInput {...defaultProps} />]);
  itSupportsFocusEvents(PinInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: PinInput,
    props: defaultProps,
    displayName: 'coengageui_core/PinInput',
    refType: HTMLDivElement,
    excludeOthers: true,
  });
  itSupportsClassName(PinInput, defaultProps);
  itSupportsMargins(PinInput, defaultProps);
  itSupportsOthers(PinInput, defaultProps);
  itSupportsStyle(PinInput, defaultProps);
  itSupportsRef(PinInput, defaultProps, HTMLDivElement);

  it('renders correct amount of inputs based on length prop', async () => {
    const { container } = await renderWithAct(<PinInput {...defaultProps} length={5} />);

    expect(container.querySelectorAll('.coengageui-PinInput-input')).toHaveLength(5);
  });

  it('fires onComplete method when last field is filled', async () => {
    const spy = jest.fn();

    const word = 'test1';
    const wordLetters = word.split('');

    const { container } = await render(
      <PinInput {...defaultProps} onChange={spy} length={word.length} />
    );

    const inputs = Array.from(container.getElementsByClassName('coengageui-PinInput-input'));

    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: wordLetters[index] } });
    });

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith(word);
    });
  });

  it('fires onChange method when typing into fields with current value', async () => {
    const spy = jest.fn();

    const word = 'test1';
    const wordLetters = word.split('');

    const { container } = await render(
      <PinInput {...defaultProps} onChange={spy} length={word.length} />
    );

    const inputs = Array.from(container.getElementsByClassName('coengageui-PinInput-input'));

    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: wordLetters[index] } });

      expect(spy).toHaveBeenCalledWith(wordLetters.slice(0, index + 1).join(''));
    });

    expect(spy).toHaveBeenCalledTimes(word.length);
  });
});
