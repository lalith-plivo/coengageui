import React from 'react';
import { checkAccessibility, itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Spoiler, SpoilerProps } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@coengageui/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: '@coengageui/core/Spoiler',
    refType: HTMLDivElement,
  });
});
