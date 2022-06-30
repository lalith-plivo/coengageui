import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = { children: 'test' };

describe('coengageui_core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: 'coengageui_core/Kbd',
    refType: HTMLElement,
  });
});
