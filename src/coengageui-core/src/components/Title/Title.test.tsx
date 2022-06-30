import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@coengageui/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@coengageui/core/Title',
    refType: HTMLHeadingElement,
  });
});
