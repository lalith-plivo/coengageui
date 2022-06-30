import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from 'coengageui_tests';
import { render } from '@testing-library/react';
import { Step, StepProps } from './Step';

const defaultProps: StepProps = {};

describe('coengageui_core/Step', () => {
  checkAccessibility([<Step aria-label="Test" />, <Step title="Test" />, <Step label="Test" />]);
  itSupportsSystemProps({
    component: Step,
    props: defaultProps,
    displayName: 'coengageui_core/Step',
    refType: HTMLButtonElement,
  });

  it('renders icon when withIcon is true', () => {
    const { container: withIcon } = render(<Step withIcon />);
    const { container: withoutIcon } = render(<Step withIcon={false} />);
    expect(withIcon.querySelectorAll('.coengageui-Step-stepIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.coengageui-Step-stepIcon')).toHaveLength(0);
  });

  it('renders step body if Step has label or description', () => {
    const { container: withLabel } = render(<Step label="test-label" />);
    const { container: withDescription } = render(<Step description="test-description" />);
    const { container: withoutBody } = render(<Step />);

    expect(withoutBody.querySelectorAll('.coengageui-Step-stepBody')).toHaveLength(0);
    expect(withLabel.querySelector('.coengageui-Step-stepLabel').textContent).toBe('test-label');
    expect(withDescription.querySelector('.coengageui-Step-stepDescription').textContent).toBe(
      'test-description'
    );
  });

  it('sets button tabIndex based on allowStepClick prop', () => {
    const { container: interactive } = render(<Step allowStepClick />);
    const { container: nonInteractive } = render(<Step allowStepClick={false} />);
    expect(interactive.firstChild).toHaveAttribute('tabindex', '0');
    expect(nonInteractive.firstChild).toHaveAttribute('tabindex', '-1');
  });
});
