import { itRendersChildren, itSupportsSystemProps } from '@coengageui/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@coengageui/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@coengageui/core/AspectRatio',
    refType: HTMLDivElement,
  });
});
