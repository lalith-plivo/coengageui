import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = { children: 'test' };

describe('@coengageui/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@coengageui/core/Kbd',
    refType: HTMLElement,
  });
});
