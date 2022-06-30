import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from 'coengageui_tests';
import { Paper, PaperProps } from './Paper';

const defaultProps: PaperProps<'div'> = {};

describe('coengageui_core/Paper', () => {
  itRendersChildren(Paper, defaultProps);
  itIsPolymorphic(Paper, defaultProps);
  itSupportsSystemProps({
    component: Paper,
    props: defaultProps,
    displayName: 'coengageui_core/Paper',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(Paper.displayName).toStrictEqual('coengageui_core/Paper');
  });
});
