import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Container sx={{ textAlign: 'center' }} maxWidth="md">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <Typography variant="h1">Test Your Knowledge with Quizzes</Typography>
            <Typography variant="body1">
              You&apos;re just looking for a playful way to learn new facts, our quizzes are
              designed to entertain and educate.
            </Typography>
            <Button component={RouterLink} to="/create" variant="text" color="primary">
              Create Quiz
            </Button>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
