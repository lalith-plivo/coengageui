import React from 'react';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Spoiler, SpoilerProps } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('coengageui_core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: 'coengageui_core/Spoiler',
    refType: HTMLDivElement,
  });
});
