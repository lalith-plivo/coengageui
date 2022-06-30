import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('coengageui_core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: 'coengageui_core/ScrollArea',
    refType: HTMLDivElement,
  });
});
