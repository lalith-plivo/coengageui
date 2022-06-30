import { itSupportsSystemProps } from '@coengageui/tests';
import { BackgroundImage } from './BackgroundImage';

describe('@coengageui/core/BackgroundImage', () => {
  itSupportsSystemProps({
    component: BackgroundImage,
    props: { src: './image.png' },
    displayName: '@coengageui/core/BackgroundImage',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(BackgroundImage.displayName).toStrictEqual('@coengageui/core/BackgroundImage');
  });
});
