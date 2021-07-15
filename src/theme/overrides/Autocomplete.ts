import { ITheme } from '../interfaces';

const Autocomplete = (theme: ITheme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
};
export default Autocomplete;
