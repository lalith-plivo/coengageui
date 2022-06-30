import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('coengageui_core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    excludePadding: true,
    displayName: 'coengageui_core/Container',
    refType: HTMLDivElement,
  });
});
