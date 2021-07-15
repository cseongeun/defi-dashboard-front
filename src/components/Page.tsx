import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
import { Box } from '@material-ui/core';

interface PageProps {
  title?: string;
}

const Page: React.FC<PageProps> = forwardRef(({ title = '', children }, ref) => (
  <Box ref={ref}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
