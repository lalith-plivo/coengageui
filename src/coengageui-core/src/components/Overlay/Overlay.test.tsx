import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps<'div'> = {};

describe('@coengageui/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@coengageui/core/Overlay',
    refType: HTMLDivElement,
  });
});
