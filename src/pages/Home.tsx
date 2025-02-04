import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

interface Question {
  title: string;
  id: number;
  text: string;
  draft: boolean;
  answers: Answer[];
}

// Getting data from localStorage
const storedData = localStorage.getItem('questions');
let data: Question[] | null = null;

if (storedData) {
  data = JSON.parse(storedData);
  console.log(data);
} else {
  console.log('No questions found in localStorage.');
}

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
        </Container>
      </Layout>
    </>
  );
};

export default Home;
