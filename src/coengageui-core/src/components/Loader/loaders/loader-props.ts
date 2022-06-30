import React from 'react';
import type { CoengageUIColor } from '@coengageui/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number;
  color: CoengageUIColor;
}
