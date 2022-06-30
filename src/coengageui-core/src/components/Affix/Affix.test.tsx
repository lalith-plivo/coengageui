import { itSupportsRef, itRendersChildren } from 'coengageui_tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {};

describe('coengageui_core/Affix', () => {
  itSupportsRef(Affix, defaultProps, HTMLDivElement);
  itRendersChildren(Affix, defaultProps);

  it('has correct displayName', () => {
    expect(Affix.displayName).toStrictEqual('coengageui_core/Affix');
  });
});
