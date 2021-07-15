import { motion } from 'framer-motion';
import { Box } from '@material-ui/core';
import { varWrapEnter } from './Wrap';

interface MotionContainerProps {
  open: boolean;
}

const MotionContainer: React.FC<MotionContainerProps> = ({ open, children }) => {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
    >
      {children}
    </Box>
  );
};

export default MotionContainer;
