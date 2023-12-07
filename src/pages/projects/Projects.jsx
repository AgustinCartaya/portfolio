import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import fetchDataFromGithubUrls from '../../api/fetchDataFromGithubUrls';
import { LoadingMessage } from '../../components';
import { Card as CustomProjectCard } from './Card';
import uniqid from "uniqid"

const Projects = () => {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchDataFromGithubUrls('projects'),
    config: {
      staleTime: 86400000, // 24 hours
    },
  });

  return (
    <LazyLoad height={50}>
      {isLoading ? (
        <LoadingMessage message="Loading Projects..." />
      ) : (
        <CustomProjectSection>
          {Array(3)
            .fill(projects)
            .flat()
            .map((props) => {
              return (
                <CustomProjectCard key={uniqid()} {...props}/>
              );
            })}
        </CustomProjectSection>
      )}
    </LazyLoad>
  );
};

export default Projects;

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
