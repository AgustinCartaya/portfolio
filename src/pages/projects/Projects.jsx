import uniqid from 'uniqid';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import useFetchDataFromGithubApi from '../../hooks/useFetchDataFromGithubApi';
import { LoadingMessage } from '../../components';
const URL_IMAGE_BASE = 'https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects';
const CarouselButton = (image) => <img style={{filter: "invert(1)"}} width="15" height="15" src={`https://img.icons8.com/ios-glyphs/30/000000/${image}.png`} alt={image} />

const Projects = () => {
  const { jsonData: projects } = useFetchDataFromGithubApi('src/my_projects');

  return (
    <>
      {projects.length > 0 ? (
        <CustomProjectSection>
          {[...projects, ...projects, ...projects].map(({ title, path, images, description }) => {
            return (
              <CustomProjectCard key={uniqid()}>
                <Carousel
                  wrapAround={true}
                  className="card__carousel"
                  defaultControlsConfig={{
                    nextButtonText: CarouselButton('forward'),
                    prevButtonText: CarouselButton('back'),
                    prevButtonStyle: carouselBtnStyles(),
                    nextButtonStyle: carouselBtnStyles(),
                  }}
                >
                  {images.map(image => {
                    return <img key={uniqid()} className="carousel_img" src={`${URL_IMAGE_BASE}/${path}/images/${image}`} />;
                  })}
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
        <LoadingMessage message="Loading Projects..."/>
      )}
    </>
  );
};

export default Projects;


function carouselBtnStyles(){
  return {
    display: 'grid',
    placeItems: 'center',
    height: '35px',
    width: '35px',
    borderRadius: '50%',
    padding: '0'
  }
}

const CustomProjectSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const CustomProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  transition: .5s all ease;
  
  .title {
    font-size: 18px;
    margin-bottom: 0;
  }

  .content {
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .slider-list {
    height: 260px;
  }

  .carousel_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CustomContainerBtn = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomButton = styled.a`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  padding: 8px 15px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  background-color: ${({ theme }) => theme?.colors?.secondary};
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;
  transition: .5s all ease;
  color: ${({ theme }) => theme?.colors?.primary};

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.primary};
    color: ${({ theme }) => theme?.colors?.secondary};
  }
`;
