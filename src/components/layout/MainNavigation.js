import { Icon, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faUserAstronaut, faMagnifyingGlass, faPlus, faHouse, faHatCowboy} from '@fortawesome/free-solid-svg-icons';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink to='/home' >
      <div className={classes.logo}><i class="fa-solid fa-book"></i>
        Reciply <FontAwesomeIcon icon ={faHatCowboy} />
       </div>
      </NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' className={navData => navData.isActive ? classes.active : '' }>
              Home
              <IconButton>
                <FontAwesomeIcon icon={faHouse} />
              </IconButton>
            </NavLink>
          </li>
          <li>
            <NavLink to='/search-page' className={navData => navData.isActive ? classes.active : '' }>
              <IconButton>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </IconButton>
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-recipe' className={navData => navData.isActive ? classes.active : '' }>
              <IconButton>
                <FontAwesomeIcon icon={faPlus} />
              </IconButton>
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile-page' className={navData => navData.isActive ? classes.active : '' }>
              <IconButton>
                <FontAwesomeIcon icon={faUserAstronaut} />            
              </IconButton>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;