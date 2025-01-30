import { Container, Typography, Grid2, Button, Box } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Form from '../components/Form';
import Layout from '../components/Layout';

const ComponentShowCasePage: React.FC = () => {
  return (
    <>
      <Layout>
        <Container sx={{ textAlign: 'center' }} maxWidth="md">
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
                  gap: '1.2rem',
                }}
              >
                <Typography variant="h1">Heading 1</Typography>
                <Typography variant="h2">Heading 2</Typography>
                <Typography variant="h3">Heading 3</Typography>
                <Typography variant="h4">Heading 4</Typography>
                <Typography variant="h5">Heading 5</Typography>
                <Typography variant="h6">Heading 6</Typography>
                <Typography variant="body1">Primary body text</Typography>
                <Typography variant="body2">Secondary body text</Typography>
                <Typography variant="caption">Tertiary body text</Typography>
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}
              >
                <Button variant="text" color="primary">
                  Primary button
                </Button>
                <Button variant="text" color="secondary">
                  Secondary button
                </Button>
                <Button variant="text" color="error">
                  Danger Button
                </Button>
              </Grid2>
              <Grid2
                size={{ xs: 12 }}
                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}
              >
                <Button variant="outlined" color="primary">
                  Primary Outline
                </Button>
                <Button variant="outlined" color="secondary">
                  Secondary Outline
                </Button>
                <Button variant="outlined" color="error">
                  Error Outline
                </Button>
              </Grid2>
            </Grid2>
          </Box>

          <Form />

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
      </Layout>
    </>
  );
};

export default ComponentShowCasePage;
