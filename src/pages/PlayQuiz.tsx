import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Quiz } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import Game from '../components/Game';
import { Box, Container } from '@mui/material';
import GameStatus from '../components/GameStatus';
import GameResult from '../components/GameResult';
import useQuizStorage from '../hooks/useQuizStorage';

const PlayQuiz: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const { quizzes, saveQuizProgress } = useQuizStorage();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showScreen, setShowScreen] = useState(false);
  const [correctMessage, setCorrectMessage] = useState(false);

  const currentQuiz = quizzes.find((item: Quiz) => item.id === Number(quizId));

  const percentageBar = currentQuiz && Math.round((step / currentQuiz.questions.length) * 100);
  const percentageResult =
    currentQuiz && Math.round((correct / currentQuiz.questions.length) * 100);
  const question = currentQuiz?.questions[step];
  const currentQuizQuestLength = currentQuiz?.questions.length;

  console.log(step === currentQuizQuestLength);

  useEffect(() => {
    if (currentQuiz) {
      setStep(currentQuiz.currentStep || 0);
      setCorrect(currentQuiz.correctAnswers || 0);
    }
  }, [currentQuiz]);

  const onClickVariant = (answerIndex: number) => {
    const isCorrect = currentQuiz?.questions[step].answers[answerIndex].correct;
    if (isCorrect) {
      setCorrect((prev) => prev + 1);
      setCorrectMessage(true);
    } else {
      setCorrectMessage(false);
    }
    setShowScreen(true);

    const nextStep = step + 1;
    setStep(nextStep);

    if (currentQuiz) {
      const updatedQuiz = {
        ...currentQuiz,
        currentStep: nextStep,
        correctAnswers: isCorrect ? correct + 1 : correct,
      };
      saveQuizProgress(updatedQuiz);
    }
  };

  const nextQuestion = () => {
    setShowScreen(false);
  };

  const restartTheQuiz = () => {
    if (currentQuiz) {
      if (step !== currentQuizQuestLength) {
        if (window.confirm('Are you sure you want to restart the quiz?')) {
          const updatedQuiz = {
            ...currentQuiz,
            currentStep: 0,
            correctAnswers: 0,
          };
          saveQuizProgress(updatedQuiz);
        }
      } else {
        const updatedQuiz = {
          ...currentQuiz,
          currentStep: 0,
          correctAnswers: 0,
        };
        saveQuizProgress(updatedQuiz);
      }
    }
    setShowScreen(false);
  };

  const getBack = () => {
    if (step !== currentQuizQuestLength) {
      if (window.confirm('Are you sure you want to get back?')) {
        navigate('/play_main');
      }
    } else {
      navigate('/play_main');
    }
  };

  return (
    <Layout>
      <Container sx={{ textAlign: 'center' }} maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {step === currentQuizQuestLength ? (
            <GameResult
              correct={correct}
              currentQuizQuestLength={currentQuizQuestLength}
              percentageResult={percentageResult}
              restartTheQuiz={restartTheQuiz}
              getBack={getBack}
            />
          ) : showScreen ? (
            <GameStatus correctMessage={correctMessage} nextQuestion={nextQuestion} />
          ) : (
            <Game
              question={question}
              onClickVariant={onClickVariant}
              percentageBar={percentageBar}
              correct={correct}
              currentQuizQuestLength={currentQuizQuestLength}
              restartTheQuiz={restartTheQuiz}
              getBack={getBack}
            />
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default PlayQuiz;
