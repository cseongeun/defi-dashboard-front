import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { ITheme } from '../../theme/interfaces';

interface HiddenProps {
  width: any;
  children: any;
}

const Hidden: React.FC<HiddenProps> = ({ width, children }) => {
  const breakpoint: any = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: ITheme) => theme.breakpoints.up(breakpoint));
  const hiddenDown = useMediaQuery((theme: ITheme) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
};

export default Hidden;
