import React, { forwardRef } from 'react';
import { DefaultProps, CoengageUINumberSize, useCoengageUIDefaultProps } from '@coengageui/styles';
import { Box } from '../Box';
import useStyles from './Table.styles';

export interface TableProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
  /** If true every odd row of table will have gray background color */
  striped?: boolean;

  /** If true row will have hover color */
  highlightOnHover?: boolean;

  /** Table caption position */
  captionSide?: 'top' | 'bottom';

  /** Horizontal cells spacing from theme.spacing or number to set value in px */
  horizontalSpacing?: CoengageUINumberSize;

  /** Vertical cells spacing from theme.spacing or number to set value in px */
  verticalSpacing?: CoengageUINumberSize;

  /** Sets font size of all text inside table */
  fontSize?: CoengageUINumberSize;
}

const defaultProps: Partial<TableProps> = {
  striped: false,
  highlightOnHover: false,
  captionSide: 'top',
  horizontalSpacing: 'xs',
  fontSize: 'sm',
  verticalSpacing: 7,
};

export const Table = forwardRef<HTMLTableElement, TableProps>((props: TableProps, ref) => {
  const {
    className,
    children,
    striped,
    highlightOnHover,
    captionSide,
    horizontalSpacing,
    verticalSpacing,
    fontSize,
    ...others
  } = useCoengageUIDefaultProps('Table', defaultProps, props);

  const { classes, cx } = useStyles(
    { captionSide, verticalSpacing, horizontalSpacing, fontSize },
    { name: 'Table' }
  );

  return (
    <Box
      {...others}
      component="table"
      ref={ref}
      className={cx(
        classes.root,
        { [classes.striped]: striped, [classes.hover]: highlightOnHover },
        className
      )}
    >
      {children}
    </Box>
  );
});

Table.displayName = '@coengageui/core/Table';
