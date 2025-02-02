import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import Layout from '../components/Layout';

interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

const CreateQuizPage: React.FC = () => {
  const [quizTitle, setQuizTitle] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, text: '', answers: [{ id: 1, text: '', correct: false }] },
  ]);

  // Handle quiz title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuizTitle(e.target.value);
  };

  // Handle question text change
  const handleQuestionChange = (qIndex: number, value: string) => {
    setQuestions((prev) => prev.map((q, i) => (i === qIndex ? { ...q, text: value } : q)));
  };

  // Handle answer text change
  const handleAnswerChange = (qIndex: number, aIndex: number, value: string) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex
          ? {
              ...q,
              answers: q.answers.map((a, j) => (j === aIndex ? { ...a, text: value } : a)),
            }
          : q,
      ),
    );
  };

  // Add a new answer (max 4 per question)
  const addAnswer = (qIndex: number) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex && q.answers.length < 4
          ? { ...q, answers: [...q.answers, { id: Date.now(), text: '', correct: false }] }
          : q,
      ),
    );
  };

  // Remove an answer
  const removeAnswer = (qIndex: number, aIndex: number) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex ? { ...q, answers: q.answers.filter((_, j) => j !== aIndex) } : q,
      ),
    );
  };

  // Mark one answer as correct (ensures only one correct answer per question)
  const markCorrect = (qIndex: number, aIndex: number) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex
          ? {
              ...q,
              answers: q.answers.map((a, j) => ({
                ...a,
                correct: j === aIndex, // Ensure only one correct answer per question
              })),
            }
          : q,
      ),
    );
  };

  // Add a new question
  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { id: Date.now(), text: '', answers: [{ id: 1, text: '', correct: false }] },
    ]);
  };

  // Remove a question
  const removeQuestion = (qIndex: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== qIndex));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quiz Data:', { title: quizTitle, questions });
    // Process the quiz data here (e.g., send to API)
  };

  return (
    <Layout>
      <Container
        sx={{
          textAlign: 'center',
          margin: '1.5rem auto 3rem',
        }}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h1" sx={{ marginBottom: '2rem' }}>
            Create a Quiz
          </Typography>

          <FormControl sx={{ width: '300px', maxWidth: '100%', marginBottom: '1.2rem' }}>
            <TextField
              label="Title"
              value={quizTitle}
              onChange={handleTitleChange}
              placeholder="Awesome Quiz"
              error={false}
              variant="outlined"
              required
            />
          </FormControl>

          <Typography variant="h2" sx={{ marginBottom: '2rem' }}>
            Questions
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {questions.map((question, qIndex) => (
              <Box
                key={question.id}
                sx={{
                  gridColumn: { md: 'span 1', xs: 'span 2' },
                  width: '100%',
                  height: '100%',
                  minHeight: '350px',
                  borderRadius: 2,
                  boxShadow: 1,
                  backgroundColor: 'white',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <FormControl sx={{ width: '100%' }}>
                  <TextField
                    label="Question"
                    value={question.text}
                    onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                    error={false}
                    variant="outlined"
                    required
                  />
                </FormControl>

                {question.answers.map((answer, aIndex) => (
                  <Box
                    key={answer.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        label={`Answer ${aIndex + 1}`}
                        value={answer.text}
                        onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                        required
                        error={false}
                        variant="outlined"
                      />
                    </FormControl>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                        flexDirection: { sm: 'row', xs: 'column' },
                        gap: { sm: '0', xs: '1rem' },
                      }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={answer.correct}
                              onChange={() => markCorrect(qIndex, aIndex)}
                            />
                          }
                          label="Correct"
                        />
                      </FormGroup>
                      <Button
                        onClick={() => removeAnswer(qIndex, aIndex)}
                        variant="text"
                        color="error"
                        disabled={question.answers.length <= 1}
                      >
                        Remove answer
                      </Button>
                    </Box>
                  </Box>
                ))}

                <Button
                  onClick={() => addAnswer(qIndex)}
                  sx={{ width: '100%', marginBottom: '1rem' }}
                  variant="outlined"
                  color="secondary"
                  disabled={question.answers.length >= 4}
                >
                  Add Answer
                </Button>

                <Button
                  onClick={() => removeQuestion(qIndex)}
                  sx={{ width: '100%' }}
                  variant="text"
                  color="error"
                  disabled={questions.length <= 1}
                >
                  Remove Question
                </Button>
              </Box>
            ))}

            <Box
              sx={{
                gridColumn: { md: 'span 1', xs: 'span 2' },
                width: '100%',
                height: '100%',
                minHeight: '350px',
                borderRadius: 2,
                boxShadow: 1,
                backgroundColor: 'white',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                sx={{ width: '100%' }}
                onClick={addQuestion}
                variant="outlined"
                color="primary"
              >
                Add question
              </Button>
            </Box>
          </Box>
          <Button type="submit" variant="text" color="primary">
            Submit
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default CreateQuizPage;
