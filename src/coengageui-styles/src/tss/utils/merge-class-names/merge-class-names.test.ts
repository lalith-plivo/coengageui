import cx from 'clsx';
import { mergeClassNames } from './merge-class-names';

const classes = {
  root: 'root-1',
  title: 'title-1',
};

describe('@coengageui/tss/merge-class-names', () => {
  it('merges classNames correctly', () => {
    expect(
      mergeClassNames(
        cx,
        classes,
        { root: 'root-provider' },
        { root: 'root-test', title: 'title-test' },
        'alert'
      )
    ).toStrictEqual({
      root: 'root-1 root-provider root-test coengageui-alert-root',
      title: 'title-1 title-test coengageui-alert-title',
    });
  });

  it('merges classNames partial correctly', () => {
    expect(
      mergeClassNames(cx, classes, { title: 'title-provider' }, { root: 'root-test' }, 'alert')
    ).toStrictEqual({
      root: 'root-1 root-test coengageui-alert-root',
      title: 'title-1 title-provider coengageui-alert-title',
    });
  });
});
