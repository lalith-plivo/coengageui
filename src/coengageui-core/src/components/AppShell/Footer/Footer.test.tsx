import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@coengageui/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@coengageui/core/Footer',
    refType: HTMLElement,
  });
});
