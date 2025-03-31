import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

import { Question, Quiz } from '../Home';

const CreateQuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>(); // id of the quiz
  const storedQuizzes = localStorage.getItem('quizzes'); // getting all quizzes
  const existingQuizzes: Quiz[] = storedQuizzes ? JSON.parse(storedQuizzes) : []; // if there's something, parse the quizzes

  // const [items, setItems] = useState<Quiz[]>(existingQuizzes);
  const [draft, setDraft] = useState<boolean>(false); // Saved as draft or not
  const [questions, setQuestions] = useState<Question[]>([
    { id: Date.now(), text: '', answers: [{ id: 1, text: '', correct: true }] },
  ]); // Questions object
  const [title, setTitle] = useState<string>(''); // Title of the quiz

  // Load quiz if editing
  useEffect(() => {
    if (quizId) {
      // Ok, there's the quiz with the id, get the data and set it to the useStates
      const foundQuiz = existingQuizzes.find((quiz) => quiz.id.toString() === quizId);
      if (foundQuiz) {
        setTitle(foundQuiz.title);
        setDraft(foundQuiz.draft);
        setQuestions(foundQuiz.questions);
      }
    }
  }, [quizId]);

  // Handle title change
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handle draft change
  const handleDraftChange = () => {
    setDraft((prevDraft) => {
      const newDraft = !prevDraft;
      return newDraft;
    });
  };

  // Handle question change
  const handleQuestionChange = (questionIndex: number, value: string) => {
    setQuestions((prev) =>
      prev.map((question, i) => {
        if (i === questionIndex) {
          return { ...question, text: value };
        } else {
          return question;
        }
      }),
    );
  };

  // Handle answer change
  const handleAnswerChange = (questionIndex: number, answerIndex: number, value: string) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            answers: question.answers.map((answer, aIndex) =>
              aIndex === answerIndex ? { ...answer, text: value } : answer,
            ),
          };
        } else {
          return question;
        }
      }),
    );
  };

  // Add answer
  const addAnswer = (questionIndex: number) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex && question.answers.length < 4) {
          return {
            ...question,
            answers: [...question.answers, { id: Date.now(), text: '', correct: false }],
          };
        } else {
          return question;
        }
      }),
    );
  };

  // Remove answer
  const removeAnswer = (questionIndex: number, answerIndex: number) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            answers: question.answers.filter((_, j) => j !== answerIndex),
          };
        } else {
          return question;
        }
      }),
    );
  };

  // Correct answer
  const markCorrect = (questionIndex: number, answerIndex: number) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            answers: question.answers.map((answer, aIndex) => ({
              ...answer,
              correct: aIndex === answerIndex,
            })),
          };
        } else {
          return question;
        }
      }),
    );
  };

  // Add question
  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { id: Date.now(), text: '', draft: false, answers: [{ id: 1, text: '', correct: true }] },
    ]);
  };

  // Remove question
  const removeQuestion = (qIndex: number) => {
    if (questions.length > 1) {
      setQuestions((prev) => prev.filter((_, i) => i !== qIndex));
    }
  };

  // Save to localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a quiz title');
      return;
    }

    const newQuiz: Quiz = {
      id: quizId ? Number(quizId) : Date.now(),
      title,
      draft,
      questions: questions.map(({ id, text, answers }) => ({ id, text, answers })),
    };

    let updatedQuizzes;
    if (quizId) {
      updatedQuizzes = existingQuizzes.map((quiz) =>
        quiz.id.toString() === quizId ? newQuiz : quiz,
      );
    } else {
      updatedQuizzes = [...existingQuizzes, newQuiz];
    }

    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
    // setItems(updatedQuizzes);
  };

  return (
    <Layout>
      <Container sx={container} maxWidth="md">
        <Box sx={form} component="form" onSubmit={handleSubmit}>
          <Typography variant="h1">
            {quizId ? `Edit Quiz${draft === true ? ' - Draft' : ''}` : 'Create a Quiz'}
          </Typography>

          <FormControl sx={formControl}>
            <TextField
              label="Title"
              value={title}
              onChange={handleTitleChange}
              variant="outlined"
              required
            />
          </FormControl>

          <Typography variant="h2">Questions</Typography>
          <Box sx={boxGrid}>
            {questions.map((question, questionIndex) => (
              <Box key={question.id} sx={boxQuestion}>
                <FormControl sx={fullWidth}>
                  <TextField
                    label="Question"
                    value={question.text}
                    onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
                    variant="outlined"
                    required
                  />
                </FormControl>

                {question.answers.map((answer, answerIndex) => (
                  <Box key={answer.id} sx={boxAnswers}>
                    <FormControl sx={fullWidth}>
                      <TextField
                        label={`Answer ${answerIndex + 1}`}
                        value={answer.text}
                        onChange={(e) =>
                          handleAnswerChange(questionIndex, answerIndex, e.target.value)
                        }
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
                              onChange={() => markCorrect(questionIndex, answerIndex)}
                            />
                          }
                          label="Correct"
                        />
                      </FormGroup>
                      <Button
                        onClick={() => removeAnswer(questionIndex, answerIndex)}
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
                  onClick={() => addAnswer(questionIndex)}
                  sx={fullWidth}
                  variant="outlined"
                  color="secondary"
                  disabled={question.answers.length >= 4}
                >
                  Add Answer
                </Button>
                <Button
                  onClick={() => removeQuestion(questionIndex)}
                  sx={fullWidth}
                  variant="text"
                  color="error"
                  disabled={questions.length <= 1}
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

          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={draft} onChange={handleDraftChange} />}
                label="Save as draft"
              />
            </FormGroup>
          </Box>

          <Button type="submit" variant="text" color="primary">
            {quizId ? 'Update Quiz' : 'Submit'}
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default CreateQuizPage;
