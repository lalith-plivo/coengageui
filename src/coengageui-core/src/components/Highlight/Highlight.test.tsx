import React from 'react';
import { render } from '@testing-library/react';
import { itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { Highlight, HighlightProps } from './Highlight';

const defaultProps: HighlightProps<'div'> = { children: 'Hello', highlight: 'He' };

describe('coengageui_core/Highlight', () => {
  itIsPolymorphic(Highlight, defaultProps);
  itSupportsSystemProps({
    component: Highlight,
    props: defaultProps,
    displayName: 'coengageui_core/Highlight',
    refType: HTMLDivElement,
  });

  it('highlights correct value', () => {
    const { container } = render(<Highlight highlight="he">Hello</Highlight>);
    expect(container.querySelector('mark').textContent).toBe('He');
  });
});
