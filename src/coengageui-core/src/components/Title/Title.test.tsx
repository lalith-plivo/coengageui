import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('coengageui_core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: 'coengageui_core/Title',
    refType: HTMLHeadingElement,
  });
});
