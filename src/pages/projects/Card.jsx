import uniqid from 'uniqid';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';

const carouselBtnStyles = {
  display: 'grid',
  placeItems: 'center',
  height: '35px',
  width: '35px',
  borderRadius: '50%',
  padding: '0',
};
const BASE_PATH_IMAGE = 'https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/data/projects';
const CarouselButton = ({ image }) => (
  <img style={{ filter: 'invert(1)' }} width="15" height="15" src={`https://img.icons8.com/ios-glyphs/30/000000/${image}.png`} alt={image} />
);


export const Card = ({ title, path, images, description }) => {
  return (
    <CustomProjectCard key={uniqid()}>
      <Carousel
        wrapAround={true}
        className="card__carousel"
        defaultControlsConfig={{
          nextButtonText: <CarouselButton image="forward" />,
          prevButtonText: <CarouselButton image="back" />,
          prevButtonStyle: carouselBtnStyles,
          nextButtonStyle: carouselBtnStyles,
        }}
      >
        {images.map(image => {
          return <img key={uniqid()} className="carousel_img" src={`${BASE_PATH_IMAGE}/${path}/images/${image}`} alt={image} />;
        })}
      </Carousel>
      <p className="title">{title}</p>
      <p className="content">{description}</p>
      <CustomContainerBtn>
        {['Code', 'Paper', 'Report'].map(text => <CustomButton key={uniqid()}>{text}</CustomButton>)}
      </CustomContainerBtn>
    </CustomProjectCard>
  );
};

const CustomProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  transition: 0.5s all ease;

  .title {
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 0;
  }

  .content {
    font-size: 14px;
    height: 150px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: lightgray;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #000000;
    }
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
  transition: 0.5s all ease;
  color: ${({ theme }) => theme?.colors?.primary};

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.primary};
    color: ${({ theme }) => theme?.colors?.secondary};
  }
`;
