import React, { useMemo } from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@material-ui/core/styles';

import { ITheme } from './interfaces';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import GlobalStyles from './globalStyles';
import ComponentsOverrides from './overrides';
import shadows, { customShadows } from './shadows';

const ThemeConfig: React.FC = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      breakpoints,
      shadows,
      customShadows,
    }),
    [],
  );
  const theme: ITheme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeConfig;
