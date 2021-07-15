import { Popover } from '@material-ui/core';
import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { ITheme } from '../theme/interfaces';

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

interface MenuPopoverProps {
  open: boolean;
  onClose?: any;
  anchorEl?: any;
  sx?: any;
}

const MenuPopover: React.FC<MenuPopoverProps> = ({ open, onClose, anchorEl, sx, children }) => {
  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      PaperProps={{
        sx: {
          mt: 1.5,
          ml: 0.5,
          overflow: 'inherit',
          boxShadow: (theme: ITheme) => theme.customShadows.z20,
          border: (theme: ITheme) => `solid 1px ${theme.palette.grey[500]}`,
          width: 200,
          ...sx,
        },
      }}
    >
      <ArrowStyle className="arrow" />
      {children}
    </Popover>
  );
};

export default MenuPopover;
