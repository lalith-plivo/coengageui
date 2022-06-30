import React, { forwardRef } from 'react';
import { DefaultProps, CoengageUINumberSize, useCoengageUIDefaultProps } from 'coengageui_styles';
import { Box } from '../Box';

export interface SpaceProps extends DefaultProps {
  /** Width, set to add horizontal spacing */
  w?: CoengageUINumberSize;

  /** Height, set to add vertical spacing */
  h?: CoengageUINumberSize;
}

const defaultProps: Partial<SpaceProps> = {
  w: 0,
  h: 0,
};

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props: SpaceProps, ref) => {
  const { w, h, sx, ...others } = useCoengageUIDefaultProps('Space', defaultProps, props);

  return (
    <Box
      ref={ref}
      sx={[
        (theme) => {
          const width = theme.fn.size({ size: w, sizes: theme.spacing });
          const height = theme.fn.size({ size: h, sizes: theme.spacing });
          return { width, height, minWidth: width, minHeight: height };
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...others}
    />
  );
});

Space.displayName = 'coengageui_core/Space';
