import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <>
      <Layout>
        <div>Home</div>
        <Link to="/components">ComponentShowCasePage</Link>
      </Layout>
    </>
  );
};

export default Home;
