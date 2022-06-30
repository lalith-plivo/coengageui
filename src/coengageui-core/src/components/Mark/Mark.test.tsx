import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('coengageui_core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: 'coengageui_core/Mark',
    refType: HTMLElement,
  });
});
