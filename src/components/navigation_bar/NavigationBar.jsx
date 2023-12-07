import uniqid from 'uniqid';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const nav_items = [
  { url: '/', title: 'Home' },
  { url: '/projects', title: 'Projects' },
  { url: '/publications', title: 'Publications' },
  { url: '/awards', title: 'Awards' },
  { url: '/resume', title: 'Resume' },
];

const NavigationBar = () => {
  return (
    <>
      <CustomNav>
        <CustomList>
          {nav_items.map(({ title, url }) => (
            <CustomListItem key={uniqid()} className="menu__item">
              <NavLink to={url} className={({ isActive }) => (isActive ? 'active' : 'none')}>
                {title}
              </NavLink>
            </CustomListItem>
          ))}
        </CustomList>
      </CustomNav>
      <MobileNavbar />
    </>
  );
};

export default NavigationBar;

const MobileNavbar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const handleSelectChange = (event) => navigate(event.target.value);
  const currentPath = location.pathname;
  return (
    <CustomSelect onChange={handleSelectChange} className="custom-select" value={currentPath}>
      {nav_items.map(({ title, url }) => (
        <option key={uniqid()} value={url}>
          {title}
        </option>
      ))}
    </CustomSelect>
  );
};

const CustomSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin: 30px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  @media (min-width: 400px) {
    display: none;
  }

  @media (max-width: 400px) {
    display: block;
  }
`;

const CustomNav = styled.nav`
  padding: 30px 0;

  @media (min-width: 400px) {
    display: block;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;
const CustomList = styled.ul`
  display: flex;
  gap: 10px;

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CustomListItem = styled.li`
  text-align: center;
  width: 100%;

  &:nth-child(even) a {
    border-left: 2px solid ${({ theme }) => theme?.colors?.primary};
    border-right: 2px solid ${({ theme }) => theme?.colors?.primary};
  }

  .active {
    font-weight: 600;
    border-radius: 0;
  }

  a {
    color: ${({ theme }) => theme?.colors?.primary};
    padding: 10px;
    display: block;
    border-radius: 0;
  }

  @media (max-width: 400px) {
    &:nth-child(even) a {
      border-left: none;
      border-right: none;
    }
  }
`;
