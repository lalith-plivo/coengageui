import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsFocusEvents,
  itSupportsSystemProps,
} from 'coengageui_tests';
import { Burger, BurgerProps } from './Burger';

const defaultProps: BurgerProps = {
  opened: true,
  title: 'Close navigation',
};

describe('coengageui_core/Burger', () => {
  checkAccessibility([<Burger {...defaultProps} />]);
  itSupportsFocusEvents(Burger, defaultProps, 'button');
  itSupportsSystemProps({
    component: Burger,
    props: defaultProps,
    displayName: 'coengageui_core/Burger',
    refType: HTMLButtonElement,
  });

  it('renders cross when opened prop is true', () => {
    const { container: opened } = render(<Burger opened />);
    const { container: closed } = render(<Burger opened={false} />);
    expect(opened.querySelectorAll('.coengageui-Burger-opened')).toHaveLength(1);
    expect(closed.querySelectorAll('.coengageui-Burger-opened')).toHaveLength(0);
  });
});
