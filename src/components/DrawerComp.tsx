import React from 'react';

import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import pages from '../config/pages';

const DrawerComp: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log(mobileOpen);
  };

  return (
    <Box sx={{ textAlign: 'center', width: '250px' }}>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#3498db',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ marginTop: '30px' }}>
        {pages.map((page) => (
          <ListItem key={page.name} sx={{ marginBottom: '15px' }} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={`${page.link}`}
              sx={{
                background: 'transparent',
                padding: '0',
                width: 'auto',
                textAlign: 'center',
                transition: 'all 0.5s ease',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#dbbb1c',
                },
              }}
            >
              <ListItemText
                primary={<Typography sx={{ fontSize: '1.2rem' }}>{page.name}</Typography>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerComp;
