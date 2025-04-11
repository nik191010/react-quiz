import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';

import QuizForm from './QuizForm/QuizForm';
import { QuizFormProvider } from './QuizForm/QuizFormContext';

const CreateQuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();

  return (
    <Layout>
      <QuizFormProvider quizId={quizId}>
        <QuizForm quizId={quizId} />
      </QuizFormProvider>
    </Layout>
  );
};

export default CreateQuizPage;
