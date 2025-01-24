import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Grid2,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import QuizIcon from '@mui/icons-material/Quiz';
import { PhotoCamera } from '@mui/icons-material';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';

const pages = [
  { name: 'Home', link: '/' },
  { name: 'Create Quiz', link: '/create' },
  { name: 'Play Quiz', link: '/play' },
];

const Component_1: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: '250px' }}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          cursor: 'pointer',
          position: 'absolute',
          top: '8px',
          right: '8px',
          '&:hover': {
            backgroundColor: 'transparent',
            color: '#3498db',
          },
        }}>
        <CloseIcon />
      </IconButton>
      <List sx={{ marginTop: '30px' }}>
        {pages.map((page) => (
          <ListItem key={page.name} sx={{ marginBottom: '15px' }} disablePadding>
            <ListItemButton
              component={RouterLink}
              to={`${page.link}`}
              sx={{
                textAlign: 'center',
                transition: 'all 0.5s ease',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#3498db',
                },
              }}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <CssBaseline />

      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, alignItems: 'center' }}>
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
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { xs: 'block', md: 'none' } }}>
                {drawer}
              </Drawer>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link component={RouterLink} to={`${page.link}`}>
                  <Button
                    key={page.name}
                    sx={{
                      my: 2,
                      marginRight: '1.2rem',
                      color: 'white',
                      display: 'block',
                      transition: 'all .5s ease',
                      '&:hover': {
                        color: '#3498db',
                      },
                    }}>
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ marginTop: '8rem' }} maxWidth="md">
        <Box sx={{ margin: '40px 0' }}>
          <Grid2 container spacing={2} justifyContent="center">
            <Grid2 size={{ xs: 6 }}>
              <Button
                variant="text"
                sx={{
                  backgroundColor: '#5E35B2',
                  color: '#fff',
                  padding: '12px 40px',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:hover': {
                    backgroundColor: '#4e306b',
                  },
                }}>
                Primary button
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Button
                variant="text"
                sx={{
                  backgroundColor: '#5E35B2',
                  color: '#fff',
                  padding: '12px 0',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  width: '220px',
                  maxWidth: '100%',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:hover': {
                    backgroundColor: '#4e306b',
                  },
                }}>
                Primary button
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Button
                variant="text"
                sx={{
                  backgroundColor: '#2ecc71',
                  color: '#fff',
                  padding: '12px 40px',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:hover': {
                    backgroundColor: '#58D68D',
                  },
                }}>
                Secondary button
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Button
                variant="text"
                sx={{
                  backgroundColor: '#2ecc71',
                  color: '#fff',
                  padding: '12px 0',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  width: '220px',
                  maxWidth: '100%',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:hover': {
                    backgroundColor: '#58D68D',
                  },
                }}>
                Secondary button
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  padding: '12px 40px',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                }}>
                Oulined button
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 6 }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  padding: '12px 0',
                  textTransform: 'none',
                  fontSize: '1.2rem',
                  width: '220px',
                  maxWidth: '100%',
                }}>
                Oulined button
              </Button>
            </Grid2>
          </Grid2>
        </Box>

        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>

        <Typography sx={{ fontSize: '1.4rem' }} variant="body1">
          This is the primary paragraph text.
        </Typography>

        <Typography sx={{ fontSize: '1.2rem' }} variant="body2">
          This is the secondary paragraph text.
        </Typography>

        <Typography sx={{ fontSize: '1rem', display: 'block' }} variant="caption">
          This is a help text or tooltip.
        </Typography>

        <TextField
          sx={{ display: 'block' }}
          label="Text Input"
          helperText="This is help text"
          error={false} // Set to true to show error styling
          variant="outlined"
        />
        <TextField
          sx={{ display: 'block' }}
          label="Number Input"
          type="number"
          helperText="Enter a number"
          error={false}
          variant="outlined"
        />
        <FormControlLabel control={<Checkbox />} label="Accept terms and conditions" />
        <RadioGroup>
          <FormLabel>Choose an option</FormLabel>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
          <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
        </RadioGroup>
        <FormControl sx={{ width: '200px', maxWidth: '100%' }}>
          <InputLabel>Choose an option</InputLabel>
          <Select>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Box component="footer" sx={{ bgcolor: '#333', py: 4 }}>
        <Container
          maxWidth="md"
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
              }}>
              © QuizApp,
            </Link>{' '}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>

      {/* <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={{ marginRight: '20px' }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ backgroundColor: '#fff', padding: '64px 0 48px' }}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" display="block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus error, adipisci
              velit optio sequi asperiores illum! Tenetur deserunt mollitia illo maiores! Minima
              perspiciatis quos esse alias fugit dolor rerum!
            </Typography>
            <Box sx={{ marginTop: '40px' }}>
              <Grid2 container spacing={2} justifyContent="center">
                <Grid2>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid2>
                <Grid2>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Container>
        </Box>
        <Container maxWidth="md" sx={{ padding: '20px' }}>
          <Grid2 container spacing={4}>
            {cards.map((card) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={card}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    sx={{ paddingTop: '56.25%' }}
                    image="https://picsum.photos/600/400"
                    title="image title"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>This is a media card.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </main>
      <Box component="footer" sx={{ backgroundColor: '#fff', padding: '50px 0' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </Box> */}
    </>
  );
};

export default Component_1;
