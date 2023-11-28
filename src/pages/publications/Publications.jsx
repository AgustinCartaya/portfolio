import LazyLoad from 'react-lazyload';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import fetchDataFromGithubUrls from '../../api/fetchDataFromGithubUrls';
import { Suspense } from 'react';
import { LoadingMessage } from '../../components';

const URL_IMAGE_BASE = 'https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects';

const Publications = () => {
  const { data: publications, isLoading } = useQuery({
    queryKey: ['publications'],
    queryFn: () => fetchDataFromGithubUrls('src/my_projects'),
    config: {
      staleTime: 86400000, // 24 hours
    },
  });

  return (
    <LazyLoad height={50}>
      <Suspense fallback={null}>
        {isLoading ? (
          <LoadingMessage message="Loading Publications..." />
        ) : (
          <CustomPublicationsSection>
            {Array(3)
              .fill(publications)
              .flat()
              .map(({ title, path, images, description }) => {
                return (
                  <CustomPublicationsCard key={uniqid()}>
                    <img className="img" src={`${URL_IMAGE_BASE}/${path}/images/${images.at(-1)}`} alt={images.at(-1)}/>
                    <div className="overlay">
                      <h4 className="title">{title}</h4>
                    </div>
                    <p className="content">{description}</p>
                    <CustomContainerBtn>
                      <CustomButton>Download</CustomButton>
                    </CustomContainerBtn>
                  </CustomPublicationsCard>
                );
              })}
          </CustomPublicationsSection>
        )}
      </Suspense>
    </LazyLoad>
  );
};

export default Publications;

const CustomPublicationsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

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
    font-size: 18px;
    color: #fff;
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
