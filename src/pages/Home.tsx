import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
<<<<<<< Updated upstream
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Layout from '../components/Layout';

const rows = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread snack', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

=======
import { Box, Button, Container, Typography } from '@mui/material';
import Layout from '../components/Layout';

>>>>>>> Stashed changes
interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

interface Question {
<<<<<<< Updated upstream
  title: string;
=======
  title?: string;
>>>>>>> Stashed changes
  id: number;
  text: string;
  draft: boolean;
  answers: Answer[];
}

<<<<<<< Updated upstream
// Getting data from localStorage
const storedData = localStorage.getItem('questions');
let data: Question[] | null = null;

if (storedData) {
  data = JSON.parse(storedData);
  console.log(data);
} else {
  console.log('No questions found in localStorage.');
}

=======
>>>>>>> Stashed changes
const Home: React.FC = () => {
  const saved = localStorage.getItem('questions');
  let initialValue: Question[] = [];

  // Checking data from LocalStorage
  const checkData = () => {
    if (saved !== null) {
      initialValue = JSON.parse(saved);
    }
  };
  checkData();

  console.log(initialValue);
  return (
    <>
      <Layout>
<<<<<<< Updated upstream
        <Container sx={{ textAlign: 'center', marginTop: '3rem' }} maxWidth="md">
          <Typography variant="h1" sx={{ marginBottom: '1.5rem' }}>
            Test Your Knowledge with Quizzes
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '2.5rem' }}>
            You're just looking for a playful way to learn new facts, our quizzes are designed to
            entertain and educate.
          </Typography>
          <Button
            sx={{ marginBottom: '4rem' }}
            component={RouterLink}
            to="/create"
            variant="text"
            color="primary"
          >
            Create Quiz
          </Button>

          <TableContainer component={Paper} sx={{ marginBottom: '2rem' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2}>
                    <Typography variant="h3">List of quizzes</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Draft</TableCell>
                </TableRow>
              </TableHead>
              {/* {data && data[0].title} */}
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
=======
        <Container sx={{ textAlign: 'center' }} maxWidth="md">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <Typography variant="h1">Test Your Knowledge with Quizzes</Typography>
            <Typography variant="body1">
              You're just looking for a playful way to learn new facts, our quizzes are designed to
              entertain and educate.
            </Typography>
            <Button component={RouterLink} to="/create" variant="text" color="primary">
              Create Quiz
            </Button>
          </Box>
>>>>>>> Stashed changes
        </Container>
        <ul>
          {initialValue.map((question) => (
            <li key={question.id}>
              <strong>{question.title || 'Untitled Question'}</strong> - {question.text}
              <ul>
                {question.answers.map((answer) => (
                  <li key={answer.id}>
                    {answer.text} {answer.correct ? '✅ (Correct Answer)' : ''}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};

export default Home;
