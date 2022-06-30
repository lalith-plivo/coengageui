import { itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps<'div'> = {
  color: '#fff',
};

describe('coengageui_core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: 'coengageui_core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
