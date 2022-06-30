import { itSupportsRef, itRendersChildren } from '@coengageui/tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {};

describe('@coengageui/core/Affix', () => {
  itSupportsRef(Affix, defaultProps, HTMLDivElement);
  itRendersChildren(Affix, defaultProps);

  it('has correct displayName', () => {
    expect(Affix.displayName).toStrictEqual('@coengageui/core/Affix');
  });
});
