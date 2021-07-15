import { Box } from '@material-ui/core';

interface LogoProps {
  sx?: any;
}

const Logo: React.FC<LogoProps> = ({ sx }) => {
  return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
};

export default Logo;
