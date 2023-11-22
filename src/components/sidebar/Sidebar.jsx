import NavigationBar from "../navigation_bar/NavigationBar";

const Sidebar = () => {
  return (
    <aside className="main__sidebar">
      <div className="sidebar__profile">
        <img
          className="profile__image"
          src="https://media.licdn.com/dms/image/D4E03AQEX13U_EAPVPg/profile-displayphoto-shrink_800_800/0/1690586175514?e=1705536000&v=beta&t=dsT25WiPtqgDp4FQK6tIg3gdaN-4V-DPd3SKblSowqA"
          alt="profile-picture"
        />
      </div>
      <div className="sidebar__content">
        <h1 className="content__title">Agustin Cartaya</h1>
        <span className="content__role">Senior Fullstack</span>
        <p className="content__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="sidebar__social">
        <a
          href="https://www.linkedin.com/in/agustincartaya/"
          target="_blank"
          className="social__link"
        >
          <img
            src="https://danieljml.github.io/dm-portfolio/assets/linkedin-0c2b9e74.svg"
            alt="linkedin"
            className="social__icon"
          />
        </a>
        <a
          href="https://github.com/AgustinCartaya"
          target="_blank"
          className="social__link"
        >
          <img
            src="https://danieljml.github.io/dm-portfolio/assets/github-9bcafea2.svg"
            alt="github"
            className="social__icon"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+33758936689"
          target="_blank"
          className="social__link"
        >
          <img
            src="https://danieljml.github.io/dm-portfolio/assets/whatsapp-ce615a0b.svg"
            alt="whatsapp"
            className="social__icon"
          />
        </a>
        <a href="" target="_blank" className="social__link">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVR4nO3a3UtaYRwHcP+cwWB/QXe9gRmEBXHI6IUKetlFRZlFXUREdVUXBVE30VUSxIJoMKJAllrmSUU9J5yaW25uabk5J1p+x/NcdDW21XzO8WHnC8/F8er5PG+/88jR6bSUadwm06vzrq43pW5uQZDfGgzPmAOkqakoGEQaG4OnoyNnq619ziXg3ews8i4Xztvbc/aKihdcAiDL7BESYwBzhKQAACwRSgHACqEkACwQSgNQaoQaAJQSoRYApUIwAywsUMSfmmyx4EwQ5LIDPCZiZ+drDfCU5JNJ3GWz4HIGUsfHcFRXw9XUhMLtLX+A4Pg4IsvLcLe04ProiD9AwGxGfGsLbpMJXw4O+AOEl5YQXlyEo6YGX71e/gCf9/fhMhphr6ricw8U0mk6+t6enn/qvKp1wNffT5cSl4C7TAZOvR5uQUCxUOAP8Gl3F6dGI8TWViT29vgD+Pr6EF1ZoUcoOUrv83l+ABlZpqdPNhoFikX4BgYQW1/nByBNTiJosTw8Z2MxOOvqcONwlD8gEwrR0SfFK59K0U7HrVZyMcGJwQBvby883d10b/iHh2mx+yZJ5QEg61yamKDnP+mwvbISJ/X19DgNzc8jNDdHfwuMjuLG6cT14SHdJ069HtlIRD0AKVqXq6sPlZe+B1mt+B4O/7JCExQBXq6t4cPmJn1OezzqAMgonjY04Ky5mXb+bwoXuSe839hAYGQE/sFB+tL3uzADJG02Ov3x7W0EzWY6qqW4wCgG8A8N4WJmBhfT03A1NuLH1RVYRGQF+LizQ08WshRyiQSTzpNol3qoHFH7W0XliNoMqBxRmwGVI/7XM+Bm9KnBo1pb28snA7TolMlPGa/d9MoL/4QAAAAASUVORK5CYII="
            alt="cv"
            className="social__icon"
          />
        </a>
      </div>
      <NavigationBar />
    </aside>
  );
};

export default Sidebar;
