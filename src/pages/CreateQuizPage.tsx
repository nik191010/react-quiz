import React, { useState } from 'react';
import Layout from '../components/Layout';
import {
  Box,
  Button,
  Container,
  FormControl,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';

const CreateQuizPage: React.FC = () => {
  const [quizTitle, setQuizTitle] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [questions, setQuestions] = useState<string[]>(['My Question']);

  const addQuestions = () => {
    setQuestions((items) => [...(items ?? []), question]);
  };

  return (
    <Layout>
      <Container sx={{ textAlign: 'center' }} maxWidth="md">
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem 0' }}
          component="form"
        >
          <FormControl sx={{ width: '300px', maxWidth: '100%' }}>
            <TextField
              label="Title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              placeholder="Awesome Quiz"
              variant="outlined"
              required
            />
          </FormControl>
          <FormControl sx={{ width: '300px', maxWidth: '100%' }}>
            <TextField
              label="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Awesome Quiz"
              variant="outlined"
              required
            />
          </FormControl>
          <Button onClick={addQuestions}>Add question</Button>
          <List>
            {questions?.map((item) => (
              <ListItem>
                <ListItemText
                  primary={<Typography variant="body1">{`${quizTitle} - ${item}`}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Layout>
  );
};

export default CreateQuizPage;
