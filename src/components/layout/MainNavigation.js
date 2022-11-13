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
import { Button, Icon } from "@mui/material";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/home" className={classes.logo}>
        <div className={classes.logo}>
          <i className="fa-solid fa-book"></i>
          Reciply <FontAwesomeIcon icon={faHatCowboy} />
        </div>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <div className={classes.searchbox}>
              <input
                className={classes.searchtxt}
                type="text"
                name=""
                placeholder="Search"
              />
              <a className={classes.searchbtn} href="#"></a>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={classes.icon}
              />
            </div>
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
              to="/newRecipe"
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
