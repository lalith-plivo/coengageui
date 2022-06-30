import { itIsPolymorphic, itSupportsSystemProps } from '@coengageui/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps<'div'> = {
  color: '#fff',
};

describe('@coengageui/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@coengageui/core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
