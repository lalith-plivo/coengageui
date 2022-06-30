import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from 'coengageui_tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('coengageui_core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toStrictEqual('coengageui_core/SelectScrollArea');
  });
});
