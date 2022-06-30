import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from 'coengageui_tests';
import { Prism, PrismTab, PrismTabs, PrismProps, PrismTabsProps } from './Prism';

const defaultProps: PrismProps = {
  children: 'test',
  withLineNumbers: true,
  language: 'tsx',
};

describe('coengageui_prism/Prism', () => {
  itSupportsSystemProps({
    component: Prism,
    props: defaultProps,
    displayName: 'coengageui_prism/Prism',
    refType: HTMLDivElement,
  });

  it('renders tooltip based on noCopy prop', () => {
    const { container: withCopy } = render(<Prism {...defaultProps} noCopy={false} />);
    const { container: withoutCopy } = render(<Prism {...defaultProps} noCopy />);

    expect(withCopy.querySelectorAll('.coengageui-Prism-copy')).toHaveLength(1);
    expect(withoutCopy.querySelectorAll('.coengageui-Prism-copy')).toHaveLength(0);
  });

  it('renders line numbers based on withLineNumbers prop', () => {
    const { container: withLineNumbers } = render(<Prism {...defaultProps} withLineNumbers />);
    const { container: withoutLineNumbers } = render(
      <Prism {...defaultProps} withLineNumbers={false} />
    );
    expect(withLineNumbers.querySelectorAll('.coengageui-Prism-lineNumber')).toHaveLength(
      defaultProps.children.split('\n').length
    );
    expect(withoutLineNumbers.querySelectorAll('.coengageui-Prism-lineNumber')).toHaveLength(0);
  });

  it('exposes PrismTabs and PrismTab components', () => {
    expect(Prism.Tabs).toBe(PrismTabs);
    expect(Prism.Tab).toBe(PrismTab);
  });
});

const defaultTabsProps: PrismTabsProps = {
  children: [
    <Prism.Tab language="tsx" key="1">
      code
    </Prism.Tab>,
  ],
};

describe('coengageui_prism/Prism.Tabs', () => {
  itSupportsSystemProps({
    component: Prism.Tabs,
    props: defaultTabsProps,
    displayName: 'coengageui_prism/Tabs',
    refType: HTMLDivElement,
  });
});
