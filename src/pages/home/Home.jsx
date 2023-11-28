import styled from 'styled-components';

const Home = () => {
  return (
    <CustomHomeSection>
      <Title>Biography</Title>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, quam vitae gravida dapibus, arcu tortor commodo urna, nec tristique urna elit ac
        ligula. Ut nec quam euismod, vehicula risus ac, scelerisque metus. Nulla facilisi. Nullam euismod augue vitae diam cursus, at tincidunt lacus convallis.
        Curabitur luctus lacus quis ex imperdiet sodales. Sed consectetur elit a accumsan hendrerit. Fusce congue justo a orci fermentum aliquam. Vivamus
        dapibus sapien ut ligula pellentesque cursus. Sed facilisis nec arcu non hendrerit. Curabitur ut tortor feugiat, fermentum dolor et, consequat elit.
      </p>

      <Title>Research Interests</Title>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit, quam vitae gravida dapibus, arcu tortor commodo urna, nec tristique urna elit ac
        ligula. Ut nec quam euismod, vehicula risus ac, scelerisque metus. Nulla facilisi. Nullam euismod augue vitae diam cursus, at tincidunt lacus convallis.
        Curabitur luctus lacus quis ex imperdiet sodales. Sed consectetur elit a accumsan hendrerit. Fusce congue justo a orci fermentum aliquam. Vivamus
        dapibus sapien ut ligula pellentesque cursus. Sed facilisis nec arcu non hendrerit. Curabitur ut tortor feugiat, fermentum dolor et, consequat elit.
      </p>

      <ul>
        <li>
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li>
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li>
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
        <li>
          <strong>Lorem ipsum dolor sit amet.</strong>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </li>
      </ul>
    </CustomHomeSection>
  );
};

export default Home;

const CustomHomeSection = styled.section`
  p {
    margin: 5px;
  }
`;
const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme?.colors?.primary};
`;
