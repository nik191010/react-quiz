import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, List, ListItem, Snackbar, Typography } from '@mui/material';
import Layout from '../components/Layout';

import Link from '@mui/material/Link';
import theme from '../theme';

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
  const [quizzes, setQuizzes] = useState<Quiz[]>(existingQuizzes);
  const [open, setOpen] = useState<boolean>(false);

  // Remove quiz
  const removeQuiz = (currentQuizId: number) => {
    // Save other quizzes without the current one and open the notification message
    const updatedQuizzes = existingQuizzes.filter((quiz) => quiz.id !== currentQuizId);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
    setQuizzes(updatedQuizzes);
    setOpen(true);
  };

  // Mui notification message
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };
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
                {quizzes.map((quiz: Quiz) => (
                  <ListItem
                    sx={{ padding: 0, display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}
                    key={quiz.id}
                  >
                    <Link sx={{ display: 'flex' }} component={RouterLink} to={`/create/${quiz.id}`}>
                      <Box>
                        {quiz.title.charAt(0).toUpperCase() + quiz.title.toLowerCase().slice(1)}
                      </Box>
                      <Box>{quiz.draft && '- Draft'}</Box>
                    </Link>
                    <Button
                      onClick={() => removeQuiz(quiz.id)}
                      sx={{
                        all: 'initial',
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '.7rem',
                        color: theme.palette.primary.main,
                        cursor: 'pointer',
                        padding: '.1rem',
                        transition: 'all ease-in 0.5s',
                        '&:hover': {
                          color: '#000',
                        },
                      }}
                    >
                      X
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Container>
        <Snackbar
          sx={{ '& .MuiPaper-root': { backgroundColor: 'green', color: 'white' } }}
          open={open}
          onClose={handleClose}
          message="The quiz has been deleted"
          autoHideDuration={1500}
          key="snackbar"
        />
      </Layout>
    </>
  );
};

export default Home;
