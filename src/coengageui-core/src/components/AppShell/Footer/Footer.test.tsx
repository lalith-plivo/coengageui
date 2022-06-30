import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('coengageui_core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: 'coengageui_core/Footer',
    refType: HTMLElement,
  });
});
