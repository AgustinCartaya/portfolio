import './styles.css';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, LoadingMessage, NavigationBar } from './components';
import Theme from './Theme';
import { Suspense } from 'react';

const App = () => {
  return (
    <CustomMain>
      <Theme>
        <GlobalStyle />
        <Container>
          <Header />
          <NavigationBar />
          <Suspense fallback={<LoadingMessage message=""/>}>
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
