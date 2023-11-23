import "./styles.css";
import { Outlet } from "react-router-dom";
import { Header, NavigationBar, Footer} from "./components";
import styled from "styled-components";

const App = () => {
  return (
    <main className="main">
      <Container>
        <Header />
        <NavigationBar />
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
}

export default App

const Container = styled.div`
  padding: 30px;

  @media (max-width: 800px) {
    padding: 20px;
  }
`