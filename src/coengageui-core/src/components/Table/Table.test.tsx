import { itSupportsSystemProps } from 'coengageui_tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('coengageui_core/Table', () => {
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: 'coengageui_core/Table',
    refType: HTMLTableElement,
  });
});
