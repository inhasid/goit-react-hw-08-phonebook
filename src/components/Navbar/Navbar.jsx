import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { selectIsLogin } from '../../redux/auth/auth-selectors';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <navbar className={styles.block}>
      <NavbarMenu />
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </navbar>
  );
};

export default Navbar;
