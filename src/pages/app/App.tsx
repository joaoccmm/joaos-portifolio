import React from 'react';
//
import { Header } from '../../components/header';
import { AppContent } from './styles';
import GlobalStyle from './../../assets/styles/global';
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from '../../assets/styles/themes/light';
import dark from '../../assets/styles/themes/dark';
//
import { usePersistentState } from '../../utils/usePersistedState';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../home';
import { Projects } from '../projects';
import { Coworkers } from '../coworkers';
import { About } from '../about';

function App() {

  const [theme, setTheme] = usePersistentState<DefaultTheme>('theme', light);

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContent>
        <GlobalStyle />
        <div className='headerContent'>
          <Header
            handleTheme={() => handleTheme()}
            theme={theme} />
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/coworkers" element={<Coworkers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AppContent>
    </ThemeProvider>
  );
}

export default App;
