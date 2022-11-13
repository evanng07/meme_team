import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}><i class="fa-solid fa-book"></i> Reciply</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/home' className={navData => navData.isActive ? classes.active : '' }>
            Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-recipe' className={navData => navData.isActive ? classes.active : '' }>
            Add a Recipe
            </NavLink>
          </li>
          <li>
            <NavLink to='/search-recipe' className={navData => navData.isActive ? classes.active : '' }>
            Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;