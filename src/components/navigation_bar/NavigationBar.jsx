import uniqid from "uniqid";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const nav_items = [
  { url: "/", title: "Home" },
  { url: "/projects", title: "Projects" },
  { url: "/publications", title: "Publications" },
  { url: "/awards", title: "Awards" },
  { url: "/resume", title: "Resume" }
];

const NavigationBar = () => {
  return (
    <CustomNav>
      <CustomList>
        {nav_items.map(({ title, url }) => (
          <CustomListItem key={uniqid()} className="menu__item">
            <NavLink to={url} className={({isActive}) => (isActive ? "active" : 'none')}>
              {title}
            </NavLink>
          </CustomListItem>
        ))}
      </CustomList>
    </CustomNav>
  );
};

export default NavigationBar;


const CustomNav = styled.nav`
  padding: 30px 0;
`
const CustomList = styled.ul`
  display: flex;
  gap: 10px;

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

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
    color: ${({ theme }) => (theme?.colors?.primary)};
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
`
