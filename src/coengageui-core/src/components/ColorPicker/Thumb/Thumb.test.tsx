import { itSupportsClassName, itSupportsStyle } from '@coengageui/tests';
import { Thumb, ThumbProps } from './Thumb';

const defaultProps: ThumbProps = {
  __staticSelector: 'Test',
  position: { x: 0.4, y: 0.5 },
  size: 'sm',
};

describe('@coengageui/core/Thumb', () => {
  itSupportsClassName(Thumb, defaultProps);
  itSupportsStyle(Thumb, defaultProps);

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@coengageui/core/Thumb');
  });
});
