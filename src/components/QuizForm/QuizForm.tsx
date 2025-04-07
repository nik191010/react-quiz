import React from 'react';
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

interface QuizFormProps {
  quizId?: string;
  handleSubmit: (e: React.FormEvent) => void;
  draft: boolean;
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  questions: {
    id: number;
    text: string;
    answers: { id: number; text: string; correct: boolean }[];
  }[];
  handleQuestionChange: (questionIndex: number, value: string) => void;
  handleAnswerChange: (questionIndex: number, answerIndex: number, value: string) => void;
  markCorrect: (questionIndex: number, answerIndex: number) => void;
  removeAnswer: (questionIndex: number, answerIndex: number) => void;
  addAnswer: (questionIndex: number) => void;
  removeQuestion: (questionIndex: number) => void;
  addQuestion: () => void;
  handleDraftChange: () => void;
  removeQuiz: () => void;
}

const QuizForm: React.FC<QuizFormProps> = ({
  quizId,
  handleSubmit,
  draft,
  title,
  handleTitleChange,
  questions,
  handleQuestionChange,
  handleAnswerChange,
  markCorrect,
  removeAnswer,
  addAnswer,
  removeQuestion,
  addQuestion,
  handleDraftChange,
  removeQuiz,
}) => {
  return (
    <>
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
          <Button onClick={removeQuiz} variant="text" color="error">
            Remove Quiz
          </Button>
        </Box>
      </Container>
    </>
    // check
  );
};

export default QuizForm;
