import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, List, ListItem, Typography } from '@mui/material';
import Layout from '../components/Layout';

import Link from '@mui/material/Link';

export interface Answer {
  correct: boolean;
  id: number;
  text: string;
}
export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Quiz {
  id: number;
  title: string;
  draft: boolean;
  questions: Question[];
}

const Home: React.FC = () => {
  // Getting a list of saved quizzes from localStorage
  const storedQuizzes = localStorage.getItem('quizzes');
  const existingQuizzes: Quiz[] = storedQuizzes ? JSON.parse(storedQuizzes) : [];
  return (
    <>
      <Layout>
        <Container sx={{ textAlign: 'center' }} maxWidth="md">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem 0' }}>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
            >
              <Typography variant="h1">Test Your Knowledge with Quizzes</Typography>
              <Typography variant="body1">
                You're just looking for a playful way to learn new facts, our quizzes are designed
                to entertain and educate.
              </Typography>
              <Button component={RouterLink} to="/create" variant="text" color="primary">
                Create Quiz
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Typography variant="h2">List of Quizzes</Typography>

              <List>
                {existingQuizzes.map((quiz: Quiz) => (
                  <ListItem sx={{ padding: 0 }} key={quiz.id}>
                    <Link
                      sx={{ display: 'flex', gap: '0 0.3rem' }}
                      component={RouterLink}
                      to={`/create/${quiz.id}`}
                    >
                      <Box>
                        {quiz.title.charAt(0).toUpperCase() + quiz.title.toLowerCase().slice(1)}
                      </Box>
                      <Box>{quiz.draft && '- Draft'}</Box>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
