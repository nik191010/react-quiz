import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Grid2,
  Button,
  Box,
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
  FormGroup,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import QuizIcon from '@mui/icons-material/Quiz';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
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

  const [selectedOption, setSelectedOption] = useState<string>('option1'); // Default value with type

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
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
        }}
      >
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
              }}
            >
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
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
      <Container sx={{ marginTop: '8rem', textAlign: 'center' }} maxWidth="md">
        <Box sx={{ margin: '40px 0' }}>
          <Grid2 container spacing={2} sx={{ width: '100%' }}>
            <Grid2
              size={{ xs: 12 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                textAlign: 'left',
                width: '400px',
                maxWidth: '100%',
                margin: '0 auto 1rem',
              }}
            >
              <Typography variant="h1" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Heading 1
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Heading 2
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Heading 3
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Heading 4
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Heading 5
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                Heading 6
              </Typography>

              <Typography sx={{ fontSize: '1.4rem', fontWeight: 'bold' }} variant="body1">
                Primary body text
              </Typography>

              <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }} variant="body2">
                Secondary body text
              </Typography>

              <Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }} variant="caption">
                Tertiary body text
              </Typography>
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Button
                variant="text"
                sx={{
                  backgroundColor: '#dbbb1c',
                  color: '#000',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  marginRight: '20px',
                  transition: 'all .5s ease',
                  '&:hover': {
                    opacity: '.8',
                  },
                }}
              >
                Primary
              </Button>

              <Button
                variant="text"
                sx={{
                  backgroundColor: '#5E35B2',
                  color: '#fff',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  marginRight: '20px',
                  transition: 'all .5s ease',
                  '&:hover': {
                    opacity: '.8',
                  },
                }}
              >
                Secondary
              </Button>

              <Button
                variant="outlined"
                sx={{
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  transition: 'all .5s ease',
                  '&:hover': {
                    opacity: '.8',
                  },
                }}
              >
                Danger
              </Button>
            </Grid2>
            <Grid2
              size={{ xs: 12 }}
              sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid #dbbb1c',
                  color: '#dbbb1c',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  marginRight: '20px',
                  transition: 'all .5s ease',
                  '&:hover': {
                    backgroundColor: '#dbbb1c',
                    color: '#fff',
                  },
                }}
              >
                Primary Outline
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'transparent',
                  border: '1px solid #5E35B2',
                  color: '#5E35B2',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  marginRight: '20px',
                  transition: 'all .5s ease',
                  '&:hover': {
                    backgroundColor: '#5E35B2',
                    color: '#fff',
                  },
                }}
              >
                Secondary Outline
              </Button>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#e74c3c',
                  border: '1px solid #e74c3c',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  transition: 'all .5s ease',
                  '&:hover': {
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                  },
                }}
              >
                Danger Outline
              </Button>
            </Grid2>
          </Grid2>
        </Box>

        <Box
          sx={{
            width: '300px',
            maxWidth: '100%',
            border: '1px solid #dbbb1c',
            margin: '0 auto',
            marginBottom: '2rem',
            borderRadius: '5px',
          }}
        >
          <form>
            <Box sx={{ padding: '20px' }}>
              <Typography
                variant="h2"
                sx={{ fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'left' }}
              >
                Form
              </Typography>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  label="Text Input"
                  helperText="A helpful text"
                  error={false}
                  variant="outlined"
                  sx={{
                    marginBottom: '1.2rem',
                    '& .MuiFormHelperText-root': {
                      color: '#000',
                      fontSize: '0.8rem',
                      marginTop: '0',
                      marginLeft: '0',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#dbbb1c',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5E35B2',
                        borderWidth: '2px',
                      },
                    },
                  }}
                />
              </FormControl>
              <FormControl sx={{ width: '100%' }}>
                <TextField
                  label="Number Input"
                  type="number"
                  // helperText="Enter a number"
                  error={false}
                  variant="outlined"
                  // defaultValue={0}
                  sx={{
                    marginBottom: '1.2rem',
                    '& .MuiFormHelperText-root': {
                      color: '#000',
                      fontSize: '0.8rem',
                      marginTop: '0',
                      marginLeft: '0',
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#dbbb1c',
                        borderWidth: '2px',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#5E35B2',
                        borderWidth: '2px',
                      },
                    },
                  }}
                />
              </FormControl>
              <FormGroup>
                <FormLabel sx={{ fontWeight: 'bold', textAlign: 'left', fontSize: '1.2rem' }}>
                  Checkbox buttons
                </FormLabel>
                <FormControlLabel
                  sx={{ fontWeight: 'bold' }}
                  control={<Checkbox />}
                  label="Option 1"
                />
                <FormControlLabel
                  sx={{ fontWeight: 'bold' }}
                  control={<Checkbox />}
                  label="Option 2"
                />
              </FormGroup>
              <RadioGroup sx={{ marginBottom: '1rem' }}>
                <FormLabel
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'left',
                    fontSize: '1.2rem',
                  }}
                >
                  Radio buttons
                </FormLabel>
                <FormControlLabel
                  sx={{ fontWeight: 'bold' }}
                  value="option1"
                  control={<Radio />}
                  label="Radio 1"
                />
                <FormControlLabel
                  sx={{ fontWeight: 'bold' }}
                  value="option2"
                  control={<Radio />}
                  label="Radio 2"
                />
              </RadioGroup>
              <FormControl
                sx={{
                  width: '100%',
                  textAlign: 'left',
                  marginBottom: '1rem',
                }}
              >
                <InputLabel
                  sx={{
                    marginTop: '-10px',
                    marginLeft: '-10px',
                    fontSize: '1.2rem',
                    color: '#000',
                  }}
                >
                  Select
                </InputLabel>
                <Select
                  sx={{
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#dbbb1c',
                    },
                  }}
                  value={selectedOption}
                  onChange={handleChange}
                >
                  <MenuItem sx={{ fontWeight: 'bold' }} value="option1">
                    Option 1
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: 'bold' }} value="option2">
                    Option 2
                  </MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{
                  backgroundColor: '#dbbb1c',
                  color: '#000',
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '100%',
                  maxWidth: '100%',
                  marginRight: '20px',
                  transition: 'all .5s ease',
                  '&:hover': {
                    opacity: '.8',
                  },
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>

        <Button
          variant="outlined"
          component={RouterLink}
          to="/"
          sx={{
            backgroundColor: 'transparent',
            border: '1px solid #5E35B2',
            color: '#5E35B2',
            padding: '7px 0',
            textTransform: 'none',
            fontSize: '1.4rem',
            fontWeight: 'bold',
            width: '220px',
            maxWidth: '100%',
            marginRight: '20px',
            marginBottom: '1rem',
            transition: 'all .5s ease',
            '&:hover': {
              backgroundColor: '#5E35B2',
              color: '#fff',
            },
          }}
        >
          Home
        </Button>
      </Container>

      <Box component="footer" sx={{ bgcolor: '#333', py: 4 }}>
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
    </>
  );
};

export default Component_1;
