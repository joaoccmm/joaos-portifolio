import React, { useEffect, useState } from 'react';
//
import '../../assets/styles/main.scss';
import { Header } from '../../components/header';
import { AppContent } from './styles';
import GlobalStyle from './../../assets/styles/global';
import { ThemeProvider, DefaultTheme } from "styled-components";
import light from '../../assets/styles/themes/light';
import dark from '../../assets/styles/themes/dark';
//
import { usePersistentState } from '../../utils/usePersistedState';

function App() {

  const [theme, setTheme] = usePersistentState<DefaultTheme>('theme', light);

  const handleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContent>
        <GlobalStyle />
        <Header handleTheme={() => handleTheme()} />
      </AppContent>
    </ThemeProvider>
  );
}

export default App;
