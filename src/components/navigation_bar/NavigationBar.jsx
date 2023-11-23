import uniqid from "uniqid";
import { NavLink } from "react-router-dom";
import styled from "styled-components"

const nav_items = [
  { url: "/", title: "Home" },
  { url: "/projects", title: "Projects" },
  { url: "/services", title: "Services" },
  { url: "/contact", title: "Contact" },
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
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
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
  color: #000000;
  width: 100%;


  &:nth-child(even) a {
    border-left: 2px solid #000;
    border-right: 2px solid #000;
  }

  .active {
    color: #afd0f3;
    border-radius: 0;
  }

  a {
    color: #000000;
    padding: 10px;
    display: block;
    border-radius: 0;
  }
`
