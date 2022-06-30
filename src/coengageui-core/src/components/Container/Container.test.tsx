import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@coengageui/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    excludePadding: true,
    displayName: '@coengageui/core/Container',
    refType: HTMLDivElement,
  });
});
