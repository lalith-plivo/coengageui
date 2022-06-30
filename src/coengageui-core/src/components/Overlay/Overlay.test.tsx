import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps<'div'> = {};

describe('coengageui_core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: 'coengageui_core/Overlay',
    refType: HTMLDivElement,
  });
});
