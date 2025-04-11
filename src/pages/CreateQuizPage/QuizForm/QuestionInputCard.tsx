import { boxQuestion, fullWidth } from './styles';
import { Box, Button, FormControl, TextField } from '@mui/material';
import AnswerInputRow from './AnswerInputRow';
import React, { FC } from 'react';
import { Question } from '../../../types';
import { useQuizFormContext } from './QuizFormContext';

interface QuestionInputProps {
  questionIndex: number;
  question: Question;
}

const QuestionInputCard: FC<QuestionInputProps> = ({ questionIndex, question }) => {
  const { questions, removeQuestion, handleQuestionChange, addAnswer } = useQuizFormContext();
  return (
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
        <AnswerInputRow
          key={answerIndex}
          answer={answer}
          answerIndex={answerIndex}
          questionIndex={questionIndex}
          question={question}
        />
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
  );
};
export default QuestionInputCard;
