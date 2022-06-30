import {
  itRendersChildren,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsRef,
} from '@coengageui/tests';
import { SelectScrollArea } from './SelectScrollArea';

describe('@coengageui/core/SelectScrollArea', () => {
  itRendersChildren(SelectScrollArea, {});
  itSupportsStyle(SelectScrollArea, {});
  itSupportsOthers(SelectScrollArea, {});
  itSupportsRef(SelectScrollArea, {}, HTMLDivElement);

  it('has correct displayName', () => {
    expect(SelectScrollArea.displayName).toStrictEqual('@coengageui/core/SelectScrollArea');
  });
});
