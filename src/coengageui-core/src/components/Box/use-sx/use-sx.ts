import {
  CoengageUIStyleSystemProps,
  CoengageUITheme,
  Sx,
  useCss,
  useCoengageUITheme,
} from 'coengageui_styles';
import { getSystemStyles } from './get-system-styles/get-system-styles';

function extractSx(sx: Sx, theme: CoengageUITheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

export function useSx(sx: Sx | Sx[], systemProps: CoengageUIStyleSystemProps, className: string) {
  const theme = useCoengageUITheme();
  const { css, cx } = useCss();

  if (Array.isArray(sx)) {
    return cx(
      className,
      css(getSystemStyles(systemProps, theme)),
      sx.map((partial) => css(extractSx(partial, theme)))
    );
  }

  return cx(className, css(extractSx(sx, theme)), css(getSystemStyles(systemProps, theme)));
}
