import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Snackbar } from '@mui/material';
import Layout from '../../components/Layout';

import { Question, Quiz } from '../Home';
import QuizForm from '../../components/QuizForm/QuizForm';

const defaultQuestion = {
  id: Date.now(),
  text: '',
  answers: [{ id: 1, text: '', correct: true }],
};

const CreateQuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { quizId } = useParams<{ quizId: string }>(); // id of the quiz
  const storedQuizzes = localStorage.getItem('quizzes'); // getting all quizzes
  const existingQuizzes: Quiz[] = storedQuizzes ? JSON.parse(storedQuizzes) : []; // if there's something, parse the quizzes

  // const [items, setItems] = useState<Quiz[]>(existingQuizzes);
  const [draft, setDraft] = useState<boolean>(false); // Saved as draft or not

  const [questions, setQuestions] = useState<Question[]>([defaultQuestion]); // Questions object
  const [title, setTitle] = useState<string>(''); // Title of the quiz
  const [open, setOpen] = useState<boolean>(false);

  // Mui notification message
  const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

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

  // Remove quiz
  const removeQuiz = () => {
    // Set the default object, clear the title and draft
    setQuestions([defaultQuestion]);
    setTitle('');
    setDraft(false);

    // Save other quizzes without the current one
    const updatedQuizzes = existingQuizzes.filter((quiz) => quiz.id.toString() !== quizId);
    localStorage.setItem('quizzes', JSON.stringify(updatedQuizzes));

    // Open the notification window and redirect the user to the 'create' page
    setOpen(true);
    setTimeout(() => {
      navigate('/create');
    }, 1500);
  };

  return (
    <Layout>
      <QuizForm
        quizId={quizId}
        title={title}
        handleTitleChange={handleTitleChange}
        draft={draft}
        handleDraftChange={handleDraftChange}
        questions={questions}
        handleQuestionChange={handleQuestionChange}
        handleAnswerChange={handleAnswerChange}
        markCorrect={markCorrect}
        addAnswer={addAnswer}
        removeAnswer={removeAnswer}
        addQuestion={addQuestion}
        removeQuestion={removeQuestion}
        handleSubmit={handleSubmit}
        removeQuiz={removeQuiz}
      />
      <Snackbar
        sx={{ '& .MuiPaper-root': { backgroundColor: 'green', color: 'white' } }}
        open={open}
        onClose={handleClose}
        message="The quiz has been deleted"
        autoHideDuration={1200}
        key="snackbar"
      />
    </Layout>
  );
};

export default CreateQuizPage;
