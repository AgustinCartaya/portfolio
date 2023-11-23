import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <CustomHeader>
      <div className="header__profile">
        <img
          className="profile__image"
          src="https://media.licdn.com/dms/image/D4E03AQEX13U_EAPVPg/profile-displayphoto-shrink_800_800/0/1690586175514?e=1705536000&v=beta&t=dsT25WiPtqgDp4FQK6tIg3gdaN-4V-DPd3SKblSowqA"
          alt="profile-picture"
        />
      </div>
      <div className="header__content">
        <h1 className="content__title">Agustin Cartaya</h1>
        <span className='content__profesion'>Fullstack Developer</span>
        <p className="content__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
          the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </CustomHeader>
  );
};

export default Header;

const CustomHeader = styled.header`
  display: flex;
  column-gap: 30px;

  .content__title {
    margin-bottom: 5px;
  }

  .content__profesion {
    font-weight: 600;
  }

  .profile__image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;

    .profile__image {
      width: 400px;
      height: 400px;
    }
  }

  @media (max-width: 500px) {
    .profile__image {
      width: 100%;
      height: 100%;
    }
  }
`;


