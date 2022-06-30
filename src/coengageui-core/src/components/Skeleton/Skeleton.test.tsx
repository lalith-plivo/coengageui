import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@coengageui/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@coengageui/core/Skeleton',
    refType: HTMLDivElement,
  });
});
