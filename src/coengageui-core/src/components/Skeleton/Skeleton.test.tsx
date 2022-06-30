import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('coengageui_core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: 'coengageui_core/Skeleton',
    refType: HTMLDivElement,
  });
});
