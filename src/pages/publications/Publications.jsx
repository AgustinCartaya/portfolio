import uniqid from 'uniqid';
import styled from 'styled-components';
import useFetchDataFromGithubApi from '../../hooks/useFetchDataFromGithubApi';
const URL_IMAGE_BASE = 'https://raw.githubusercontent.com/AgustinCartaya/portfolio/main/src/my_projects';
const Publications = () => {
  const { jsonData: publications } = useFetchDataFromGithubApi('src/my_projects');

  return (
    <>
      {publications.length > 0 ? (
        <CustomPublicationsSection>
          {[...publications, ...publications, ...publications].map(({ title, path, images, description }) => {
            return (
              <CustomPublicationsCard key={uniqid()}>
                <img className="img" src={`${URL_IMAGE_BASE}/${path}/images/${images.at(-1)}`} />
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
      ) : (
        <CustomLoading>Loading Publications...</CustomLoading>
      )}
    </>
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

  .title, .content {
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
    -webkit-line-clamp: 4;
  }

  .img {
    width: 100%;
    height: 300px;
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
  transition: .5s all ease;
  color: ${({ theme }) => theme?.colors?.primary};

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.primary};
    color: ${({ theme }) => theme?.colors?.secondary};
  }
`;

const CustomLoading = styled.p`
  min-height: 800px;
  text-align: center;
`;
