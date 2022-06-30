import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps<'div'> = {
  children: 'test-center',
};

describe('coengageui_core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: 'coengageui_core/Center',
    refType: HTMLDivElement,
  });
});
