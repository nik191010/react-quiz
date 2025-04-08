import { useState } from 'react';
import { Quiz } from '../types';
import { useSnackBar } from './SnackBarContext';
import { useNavigate } from 'react-router-dom';

const getStoredQuizzes = (): Array<Quiz> => {
  const storedQuizzes = localStorage.getItem('quizzes');
  return storedQuizzes ? JSON.parse(storedQuizzes) : [];
};

export const useQuizStorage = () => {
  const { addMessage } = useSnackBar();
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState<Quiz[]>(getStoredQuizzes());

  const addOrUpdateQuiz = (newQuiz: Quiz) => {
    const existingQuiz = quizzes.find((quiz) => quiz.id === newQuiz.id);
    const updatedQuizzes = existingQuiz
      ? quizzes.map((quiz) => (quiz.id === newQuiz.id ? newQuiz : quiz))
      : [...quizzes, newQuiz];
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
    setQuizzes(updatedQuizzes);
    addMessage({ text: 'The quiz has been saved', severity: 'success' });
  };

  const removeQuiz = (currentQuizId: number) => {
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== currentQuizId);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));
    setQuizzes(updatedQuizzes);
    addMessage({ text: 'The quiz has been deleted', severity: 'info' });
  };

  const getQuizOr404 = (quizId: number, quizzes: Array<Quiz>) => {
    const quiz = quizzes.find((quiz) => quiz.id === quizId);
    if (!quiz) {
      navigate('/404');
    }
    return quiz;
  };
  return { quizzes, setQuizzes, removeQuiz, addOrUpdateQuiz, getQuizOr404 };
};

export default useQuizStorage;
