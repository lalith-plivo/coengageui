import { itSupportsSystemProps } from 'coengageui_tests';
import { BackgroundImage } from './BackgroundImage';

describe('coengageui_core/BackgroundImage', () => {
  itSupportsSystemProps({
    component: BackgroundImage,
    props: { src: './image.png' },
    displayName: 'coengageui_core/BackgroundImage',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(BackgroundImage.displayName).toStrictEqual('coengageui_core/BackgroundImage');
  });
});
