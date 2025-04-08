import { boxQuestion, fullWidth } from './styles';
import { Box, Button, FormControl, TextField } from '@mui/material';
import AnswerInputRow from './AnswerInputRow';
import React, { FC } from 'react';
import { Question } from '../../../types';


interface QuestionInputProps {
  handleAnswerChange: (questionIndex: number, answerIndex: number, value: string) => void;
  handleQuestionChange: (questionIndex: number, value: string) => void;
  questionIndex: number;
  markCorrect: (questionIndex: number, answerIndex: number) => void;
  question: Question;
  removeAnswer: (questionIndex: number, answerIndex: number) => void;
  addAnswer: (questionIndex: number) => void;
  removeQuestion: (questionIndex: number) => void;
  questions: Question[];
}

const QuestionInputCard: FC<QuestionInputProps> = ({
  questionIndex,
  question,
  removeAnswer,
  handleAnswerChange,
  markCorrect,
  handleQuestionChange,
  addAnswer,
  questions,
  removeQuestion,
}) => {
  // Can't do this:
  // const { quizId } = useParams<{ quizId: string }>();
  // const { removeQuestion } = useQuizForm(quizId ? parseInt(quizId) : Date.now());
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
          handleAnswerChange={handleAnswerChange}
          questionIndex={questionIndex}
          removeAnswer={removeAnswer}
          question={question}
          markCorrect={markCorrect}
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
