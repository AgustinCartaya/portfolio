import './styles.css';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, NavigationBar } from './components';
import Theme from './Theme';
import useDarkMode from './hooks/useDarkMode';
import { Suspense } from 'react';

const App = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const handleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem('darkmode', JSON.stringify(!isDarkMode));
  };

  return (
    <CustomMain>
      <Theme>
        <GlobalStyle />
        <Container>
          <Header handleTheme={handleTheme} />
          <NavigationBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Theme>
    </CustomMain>
  );
};

export default App;

const CustomMain = styled.main`
  border-radius: 5px;
  max-width: 1200px;
`;

const Container = styled.div`
  padding: 30px;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme?.colors?.backgroundDefault};
    color: ${({ theme }) => theme?.colors?.primary};
  }
`;
