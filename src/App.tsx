import React from 'react';
import { ThemeConfig } from './theme';
import { ScrollToTop } from './components';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers';

const App: React.FC = () => {
  return (
    <Providers>
      <BrowserRouter>
        <ThemeConfig>
          <ScrollToTop />
          <Routes />
        </ThemeConfig>
      </BrowserRouter>
    </Providers>
  );
};

export default App;
