import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import { Box, CssBaseline } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem 0',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{ flex: 1, display: 'flex', flexDirection: 'column', pt: '8rem' }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
