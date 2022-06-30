import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@coengageui/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@coengageui/core/ScrollArea',
    refType: HTMLDivElement,
  });
});
