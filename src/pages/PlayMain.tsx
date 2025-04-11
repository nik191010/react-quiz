import React from 'react';
import Layout from '../components/Layout';
import { Box, Button, Container, List, ListItem, Typography } from '@mui/material';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { Quiz } from '../types';
import useQuizStorage from '../hooks/useQuizStorage';

const PlayMain: React.FC = () => {
  const { quizzes } = useQuizStorage();

  return (
    <Layout>
      <Container sx={{ textAlign: 'center' }} maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem 0' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <Typography variant="h1">Choose the Quizz</Typography>
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
              {quizzes.length > 0 && quizzes.some((quiz: Quiz) => !quiz.draft) ? (
                quizzes
                  .filter((quiz: Quiz) => quiz.draft === false)
                  .map((quiz: Quiz) => (
                    <ListItem
                      sx={{ padding: 0, display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}
                      key={quiz.id}
                    >
                      <Link component={RouterLink} to={`/play_quiz/${quiz.id}`}>
                        <Box>
                          {quiz.title.charAt(0).toUpperCase() + quiz.title.toLowerCase().slice(1)}
                        </Box>
                      </Link>
                      <Typography>Questions: {quiz.questions.length}</Typography>
                    </ListItem>
                  ))
              ) : (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                  }}
                >
                  <Typography variant="h3">
                    No quizzes available. Create one to start playing!
                  </Typography>
                  <Button component={RouterLink} to="/create" variant="text" color="primary">
                    Create Quiz
                  </Button>
                </Box>
              )}
            </List>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default PlayMain;
