import { itSupportsSystemProps } from '@coengageui/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@coengageui/core/Table', () => {
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@coengageui/core/Table',
    refType: HTMLTableElement,
  });
});
