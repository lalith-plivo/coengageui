import React from 'react';
import { useCoengageUITheme, DefaultProps, CoengageUISize } from 'coengageui_styles';

interface ChevronIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'svg'> {
  size: CoengageUISize;
  error: any;
}

const iconSizes = {
  xs: 14,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
};

export function ChevronIcon({ size, error, style, ...others }: ChevronIconProps) {
  const theme = useCoengageUITheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      style={{ color: error ? theme.colors.danger[1] : theme.typography_light, ...style }}
      data-chevron
      {...others}
    >
      <path
        stroke={theme.typography_light}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.834 7.5L10 13.333 4.167 7.5"
      />
    </svg>
  );
}
