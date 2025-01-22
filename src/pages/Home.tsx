import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* <div>Home</div> */}
      <Link to="/components">Components</Link>
    </div>
  );
};

export default Home;
