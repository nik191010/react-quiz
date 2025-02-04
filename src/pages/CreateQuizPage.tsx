import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  Box,
  Button,
  Container,
  FormControl,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material';

const CreateQuizPage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [questions, setQuestions] = useState<string[]>(['Question 1']);
  const [count, setCount] = useState<number>(2);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  // };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleQuestions = () => {
    setCount(count + 1);
    setQuestions((t) => [...t, `Question ${count}`]);
    console.log(questions);
  };

  return (
    <Layout>
      <Container
        sx={{
          textAlign: 'center',
          margin: '1.5rem auto 3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        maxWidth="md"
      >
        <Box
          component="form"
          sx={{
            width: '300px',
            maxWidth: '100%',
            border: '1px solid #dbbb1c',
            margin: '0 auto',
            marginBottom: '2rem',
            borderRadius: '5px',
            p: 2,
          }}
        >
          <FormControl sx={{ width: '100%' }}>
            <TextField
              label="Quiz title"
              onChange={handleTitleChange}
              error={false}
              variant="outlined"
              sx={{
                marginBottom: '1.2rem',
              }}
            />
          </FormControl>
          <Button onClick={handleQuestions} variant="text" color="primary">
            Add question
          </Button>
        </Box>
        <List>
          <Typography variant="h1">{title}</Typography>

          {questions.map((question, index) => (
            <ListItem key={index}>{question}</ListItem>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default CreateQuizPage;
