import './styles.css';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Header, LoadingMessage, NavigationBar } from './components';
import Theme from './Theme';
import { Suspense } from 'react';

const App = () => {
  return (
    // <CustomMain>
    //   <Theme>
    //     <GlobalStyle />
    //     <Container>
    //       <Header />
    //       <NavigationBar />
    //       <Suspense fallback={<LoadingMessage message=""/>}>
    //         <Outlet />
    //       </Suspense>
    //     </Container>
    //   </Theme>
    // </CustomMain>

    <div>
      <a href='https://github.com/AgustinCartaya' target='_blank'>github</a>
      <a href='./test.pdf'>PDF </a>
      {/* <a href='https://drive.google.com/file/d/1U3yGiLsa7A-CH8y79uZBQEhOMvnDPny0/view?usp=sharing' target='_blank'>PDF</a> */}
    </div>
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
