import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';

import QuizForm from './QuizForm/QuizForm';

const CreateQuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();

  return (
    <Layout>
      <QuizForm quizId={quizId} />
    </Layout>
  );
};

export default CreateQuizPage;
