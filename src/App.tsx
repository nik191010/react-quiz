import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';
import ComponentShowCasePage from './pages/ComponentShowCasePage';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import { SnackBarProvider } from './hooks/SnackBarContext';
import PlayMain from './pages/PlayMain';
import PlayQuiz from './pages/PlayQuiz';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <SnackBarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play_main" element={<PlayMain />} />
          <Route path="/play_quiz" element={<PlayQuiz />}>
            <Route path=":quizId" element={<PlayQuiz />} />
          </Route>
          <Route path="/components" element={<ComponentShowCasePage />} />
          <Route path="/create" element={<CreateQuizPage />}>
            <Route path=":quizId" element={<CreateQuizPage />} />
          </Route>
        </Routes>
      </Router>
    </SnackBarProvider>
  </ThemeProvider>
);

export default App;
