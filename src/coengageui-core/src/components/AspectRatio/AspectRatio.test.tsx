import { itRendersChildren, itSupportsSystemProps } from 'coengageui_tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('coengageui_core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: 'coengageui_core/AspectRatio',
    refType: HTMLDivElement,
  });
});
