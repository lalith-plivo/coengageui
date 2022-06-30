import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@coengageui/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@coengageui/core/Mark',
    refType: HTMLElement,
  });
});
