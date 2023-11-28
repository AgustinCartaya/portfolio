import React from 'react';
import styled from 'styled-components';
import useDarkMode from '../../hooks/useDarkMode';

const ThemeIcon = ({ isDarkMode }) =>
  isDarkMode ? (
    <span className={'material-icons-outlined icon'} style={{ color: '#fff' }}>
      wb_sunny
    </span>
  ) : (
    <span className={'material-icons icon'}>dark_mode</span>
  );

const Header = ({ handleTheme }) => {
  const { isDarkMode } = useDarkMode();
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
        <div className="header__toggle">
          <button className="toggle__button" onClick={handleTheme}>
            <ThemeIcon isDarkMode={isDarkMode}/>
          </button>
        </div>
        <h1 className="content__title">Agustin Cartaya</h1>
        <span className="content__profesion">Fullstack Developer</span>
        <p className="content__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1400s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
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
  color: ${({ theme }) => theme?.colors?.primary};

  .content__title {
    margin-bottom: 5px;
    margin-top: 0;
  }

  .content__profesion {
    font-weight: 600;
  }

  .profile__image {
    object-fit: cover;
    width: 237px;
    height: 245px;
  }

  .header__toggle {
    display: flex;
    justify-content: end;
  }

  .toggle__button {
    border: none;
    height: 40px;
    cursor: pointer;
    background-color: inherit;
  }

  .icon {
    font-size: 30px;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    justify-content: center;

    .profile__image {
      box-shadow: rgba(0, 0, 0, 0.18) 0px 0px 25px;
      border-radius: 50%;
      width: 350px;
      height: 350px;
    }
  }

  @media (max-width: 500px) {
    .profile__image {
      width: 250px;
      height: 250px;
    }
  }
`;
