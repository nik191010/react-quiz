import { AppBar, Box, Button, Drawer, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import QuizIcon from '@mui/icons-material/Quiz';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerComp from './DrawerComp';
import pages from '../config/pages';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link component={RouterLink} to="/">
              <QuizIcon sx={{ color: '#fff', fontSize: '2rem' }} />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <DrawerComp />
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, gap: '1.2rem' }}>
            {pages.map((page) => (
              <Link key={page.name} component={RouterLink} to={`${page.link}`}>
                <Button
                  sx={{
                    background: 'transparent',
                    padding: '0',
                    width: 'auto',
                    fontSize: '1.2rem',
                    color: 'white',
                    display: 'block',
                    transition: 'all .5s ease',
                    '&:hover': {
                      color: '#dbbb1c',
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
