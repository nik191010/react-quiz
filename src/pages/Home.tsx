import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link to="/components">Components</Link>
      <Button variant="contained" color="primary">
        Check
      </Button>
    </div>
  );
};

export default Home;
