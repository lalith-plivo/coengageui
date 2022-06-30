import { randomId } from './random-id';

describe('@coengageui/hooks/random-id', () => {
  it('returns random id with coengageui- prefix', () => {
    expect(randomId().includes('coengageui-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
