import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <Container sx={{ textAlign: 'center', marginTop: '3rem' }} maxWidth="md">
          <Typography variant="h1" sx={{ marginBottom: '1.5rem' }}>
            Test Your Knowledge with Quizzes
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '2.5rem' }}>
            You're just looking for a playful way to learn new facts, our quizzes are designed to
            entertain and educate.
          </Typography>
          <Button component={RouterLink} to="/create" variant="text" color="primary">
            Create Quiz
          </Button>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
