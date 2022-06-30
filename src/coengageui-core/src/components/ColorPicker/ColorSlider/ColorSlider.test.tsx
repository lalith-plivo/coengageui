import { itSupportsSystemProps } from 'coengageui_tests';
import { ColorSlider, ColorSliderProps } from './ColorSlider';

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
};

describe('coengageui_core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: 'coengageui_core/ColorSlider',
    refType: HTMLDivElement,
  });
});
