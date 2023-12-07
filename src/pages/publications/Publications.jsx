import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import fetchDataFromGithubUrls from '../../api/fetchDataFromGithubUrls';
import { LoadingMessage } from '../../components';
import { Card as CustomPublicationsCard } from "./Card"
import uniqid from "uniqid"

const Publications = () => {
  const { data: publications, isLoading } = useQuery({
    queryKey: ['publications'],
    queryFn: () => fetchDataFromGithubUrls('projects'),
    config: {
      staleTime: 86400000, // 24 hours
    },
  });

  return (
    <LazyLoad height={50}>
      {isLoading ? (
        <LoadingMessage message="Loading Publications..." />
      ) : (
        <CustomPublicationsSection>
          {Array(3)
            .fill(publications)
            .flat()
            .map((props) => {
              return (
                <CustomPublicationsCard key={uniqid()} {...props}/>
              );
            })}
        </CustomPublicationsSection>
      )}
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
