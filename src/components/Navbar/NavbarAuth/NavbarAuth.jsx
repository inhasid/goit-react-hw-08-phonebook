import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.block}>
      <NavLink to="/signup" className={styles.link}>
        SignUp
      </NavLink>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
