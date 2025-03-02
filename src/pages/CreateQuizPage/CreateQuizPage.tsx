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
import Layout from '../../components/Layout';
import {
  boxAnswers,
  boxCheckbox,
  boxGrid,
  boxQuestion,
  container,
  form,
  formControl,
  fullWidth,
  newQuestion,
} from './styles';

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

interface Quiz {
  title: string;
  questions: Question[];
}

const CreateQuizPage: React.FC = () => {
  const [quiz, setQuiz] = useState<Quiz>({
    title: '',
    questions: [
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        text: '',
        answers: [{ id: 1, text: '', correct: true }],
      },
    ],
  });

  // Handle quiz title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, title: e.target.value });
  };

  // Handle question text change
  const handleQuestionChange = (qIndex: number, value: string) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((question, index) => {
        if (index === qIndex) {
          return { ...question, text: value };
        } else {
          return question;
        }
      }),
    }));
  };

  // Handle answer text change
  const handleAnswerChange = (qIndex: number, aIndex: number, value: string) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((question, index) => {
        if (index === qIndex) {
          return {
            ...question,
            answers: question.answers.map((answer, answerIndex) =>
              answerIndex === aIndex ? { ...answer, text: value } : answer,
            ),
          };
        } else {
          return question;
        }
      }),
    }));
  };

  // Add a new answer
  const addAnswer = (qIndex: number) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((question, index) => {
        if (index === qIndex && question.answers.length < 4) {
          return {
            ...question,
            answers: [...question.answers, { id: Date.now(), text: '', correct: false }],
          };
        } else {
          return question;
        }
      }),
    }));
  };

  // Remove an answer
  const removeAnswer = (qIndex: number, aIndex: number) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((question, index) => {
        if (index === qIndex) {
          return { ...question, answers: question.answers.filter((_, j) => j !== aIndex) };
        } else {
          return question;
        }
      }),
    }));
  };

  // Mark one answer as correct (ensures only one correct answer per question)
  const markCorrect = (qIndex: number, aIndex: number) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((question, index) => {
        if (index === qIndex) {
          return {
            ...question,
            answers: question.answers.map((answer, answerIndex) => ({
              ...answer,
              correct: answerIndex === aIndex,
            })),
          };
        } else {
          return question;
        }
      }),
    }));
  };

  // Add a new question
  const addQuestion = () => {
    setQuiz((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        { id: Date.now(), text: '', answers: [{ id: Date.now(), text: '', correct: false }] },
      ],
    }));
  };

  // Remove a question
  const removeQuestion = (qIndex: number) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.filter((_, index) => index !== qIndex),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Container sx={container} maxWidth="md">
        <Box sx={form} component="form" onSubmit={handleSubmit}>
          <Typography variant="h1">Create a Quiz</Typography>

          <FormControl sx={formControl}>
            <TextField
              label="Title"
              value={quiz.title}
              onChange={handleTitleChange}
              placeholder="Awesome Quiz"
              variant="outlined"
              required
            />
          </FormControl>

          <Typography variant="h2">Questions</Typography>

          <Box sx={boxGrid}>
            {quiz.questions.map((question, qIndex) => (
              <Box key={question.id} sx={boxQuestion}>
                <FormControl sx={fullWidth}>
                  <TextField
                    label="Question"
                    value={question.text}
                    onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                    variant="outlined"
                    required
                  />
                </FormControl>

                {question.answers.map((answer, aIndex) => (
                  <Box key={answer.id} sx={boxAnswers}>
                    <FormControl sx={fullWidth}>
                      <TextField
                        label={`Answer ${aIndex + 1}`}
                        value={answer.text}
                        onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                        required
                        variant="outlined"
                      />
                    </FormControl>

                    <Box sx={boxCheckbox}>
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
                  sx={fullWidth}
                  variant="outlined"
                  color="secondary"
                  disabled={question.answers.length >= 4}
                >
                  Add Answer
                </Button>

                <Button
                  onClick={() => removeQuestion(qIndex)}
                  sx={fullWidth}
                  variant="text"
                  color="error"
                  disabled={quiz.questions.length <= 1}
                >
                  Remove Question
                </Button>
              </Box>
            ))}

            <Box sx={newQuestion}>
              <Button sx={fullWidth} onClick={addQuestion} variant="outlined" color="primary">
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
