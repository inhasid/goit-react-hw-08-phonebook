import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { name } = useSelector(selectUser);
  console.log(name);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.block}>
      <p>{name}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
