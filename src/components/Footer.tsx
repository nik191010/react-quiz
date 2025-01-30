import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

import QuizIcon from '@mui/icons-material/Quiz';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#333', py: 4, mt: 'auto' }}>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link component={RouterLink} to="/">
          <QuizIcon sx={{ color: '#fff', fontSize: '1.7rem' }} />
        </Link>
        <Typography variant="body1" color="#fff" align="center">
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              marginRight: '5px',
              textDecoration: 'none',
              '&:hover': {
                color: '#3498db',
                transition: 'all .5s ease',
              },
            }}
          >
            © QuizApp,
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
