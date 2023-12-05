import uniqid from 'uniqid';
import styled from 'styled-components';
const BASE_PATH_IMAGE = 'https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects';

export const Card = ({ title, path, images, description }) => {
  return (
    <CustomPublicationsCard key={uniqid()}>
      <img className="img" src={`${BASE_PATH_IMAGE}/${path}/images/${images.at(-1)}`} alt={images.at(-1)} />
      {/* <div className="overlay"> */}
      {/* </div> */}
      <h4 className="title">{title}</h4>

      <p className="content">{description}</p>
      <CustomContainerBtn>
        <CustomButton>Download</CustomButton>
      </CustomContainerBtn>
    </CustomPublicationsCard>
  );
};

const CustomPublicationsCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
  transition: 0.5s all ease;

  .title,
  .content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .title {
    margin: 0;
    font-size: 22px;
    -webkit-line-clamp: 3;
  }

  .content {
    font-size: 14px;
    -webkit-line-clamp: 6;
  }

  .img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .overlay {
    width: -webkit-fill-available;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background-color: rgba(34, 34, 34, 0.5);
    padding: 30px;
    height: 100px;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }

  &:hover .overlay {
    transform: scaleY(1);
  }
`;

const CustomContainerBtn = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const CustomButton = styled.a`
  text-decoration: none;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
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
