// import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faMagnifyingGlass,
  faPlus,
  faHouse,
  faHatCowboy,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/home" className={classes.logo}>
        <div className={classes.logo}>
          <i class="fa-solid fa-book"></i>
          Reciply <FontAwesomeIcon icon={faHatCowboy}/>
        </div>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/search-page"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={classes.icon}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <FontAwesomeIcon icon={faHouse} className={classes.icon} />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/new-recipe"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <FontAwesomeIcon icon={faPlus} className={classes.wide} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile-page"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <FontAwesomeIcon
                icon={faUserAstronaut}
                className={classes.wide}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
