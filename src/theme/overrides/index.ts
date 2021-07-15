import { merge } from 'lodash';
import { ITheme } from '../interfaces';

import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';

// ----------------------------------------------------------------------

const ComponentsOverrides = (theme: ITheme) => {
  return merge(
    Card(theme),
    Lists(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    Paper(),
  );
};
export default ComponentsOverrides;
