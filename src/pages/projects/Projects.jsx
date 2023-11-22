import uniqid from 'uniqid';
import useProjects from './useProjects';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';

const Projects = () => {
  const { jsonData } = useProjects();
  return (
    <>
      {jsonData.length > 0 ? (
        <CustomProjectSection>
          {jsonData.map(({ title, description }) => {
            return (
              <CustomProjectCard key={uniqid()}>
                <Carousel wrapAround={true} className='project__carousel'>
                  <img className='carousel_img' src="https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects/alzheimers_disease_onset_recognition_by_handwriting/images/inceptionv3.png" />
                </Carousel>
                <h4 className="title">{title}</h4>
                <p className="content">{description}</p>
                <CustomContainerBtn>
                  <CustomButton>Code</CustomButton>
                  <CustomButton>Paper</CustomButton>
                  <CustomButton>Report</CustomButton>
                </CustomContainerBtn>
              </CustomProjectCard>
            );
          })}
        </CustomProjectSection>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default Projects;

const CustomProjectSection = styled.div`
  display: block;
`;

const CustomProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #e8e8e8;
  flex-basis: calc(50% - 30px);

  .title {
    font-size: 25px;
  }

  .carousel_img {
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
`;

const CustomContainerBtn = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px;
  background-color: #afd0f3;
  color: #fff;
  font-family: inherit;
  width: 150px;
`;
