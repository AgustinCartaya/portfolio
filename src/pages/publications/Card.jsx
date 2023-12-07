import uniqid from 'uniqid';
import styled from 'styled-components';
import { BASE_PATH } from '../../helpers';

export const Card = ({ title, path, images, description }) => {
  return (
    <CustomPublicationsCard key={uniqid()}>
      <img
        className="img"
        src={`${BASE_PATH}/${path}/images/${images.at(-1)}`}
        alt={images.at(-1)}
      />
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

  .title {
    margin: 20px 0 0 0;
    font-size: 22px;
  }

  .content {
    text-align: justify;
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

  .img {
    width: 100%;
    height: 250px;
    object-fit: cover;
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
