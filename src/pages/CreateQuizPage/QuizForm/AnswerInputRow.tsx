import { boxAnswers, boxCheckbox, fullWidth } from './styles';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import React, { FC } from 'react';
import { Answer, Question } from '../../../types';

interface AnswerInputProps {
  answer: Answer;
  answerIndex: number;
  handleAnswerChange: (questionIndex: number, answerIndex: number, value: string) => void;
  questionIndex: number;
  markCorrect: (questionIndex: number, answerIndex: number) => void;
  question: Question;
  removeAnswer: (questionIndex: number, answerIndex: number) => void;
}

const AnswerInputRow: FC<AnswerInputProps> = ({
  answer,
  answerIndex,
  handleAnswerChange,
  questionIndex,
  markCorrect,
  question,
  removeAnswer,
}) => {
  return (
    <Box key={answer.id} sx={boxAnswers}>
      <FormControl sx={fullWidth}>
        <TextField
          label={`Answer ${answerIndex + 1}`}
          value={answer.text}
          onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
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
  );
};

export default AnswerInputRow;
