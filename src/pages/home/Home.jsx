import styled from "styled-components";

const Home = () => {
  return (
    <CustomHomeSection>
      <Title>Biography</Title>

      <p>I am currently pursuing an Erasmus Mundus Joint Master Degree in Medical Imaging and Applications (MAIA), coordinated by the University of Girona, Spain, along with the Université de Bourgogne, France, and the University of Cassino, Italy as partner universities. I am a research collaborator with Prof. Yongjian Hu's Lab at the South China University of Technology and Prof. Yu Guan at the University of Warwick, UK.
      I received my Bachelor's degree in Computer Science from the University of Engineering and Technology, Lahore, Pakistan. Also, I got the chance to do a Summer of Code internship at JSK Lab, University of Tokyo, Japan, working on the prediction of robotics execution failures using deep learning models, with funding from Google.
      </p>

      <Title>Research Interests</Title>

      <p>I have broad interests in medical imaging analysis, deep learning, image processing, and natural language processing. My current research topics are about:</p>

      <ul>
        <li><p><strong>Image Registration</strong></p></li>
        <li><p><strong>Medical Image Analysis</strong><br />- breast mass detection and segmentation<br />- skin lesions detection<br />- diabetic retinopathy severity classification/lesions segmentation</p></li>
        <li><p><strong>Learning with Low Supervision</strong><br />- weakly supervised image segmentation<br />- semi-supervised/unsupervised cross-domain image classification</p></li>
        <li><p><strong>Natural Language Processing</strong><br />- sentiment analysis/emotion AI</p></li>
      </ul>
    </CustomHomeSection>
  );
};

export default Home;

const CustomHomeSection = styled.section`
`
const Title = styled.h2`
  border-bottom: 2px solid ${({ theme }) => theme?.colors?.primary};;
`