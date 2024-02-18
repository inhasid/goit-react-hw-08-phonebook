import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  console.log(email);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.block}>
      <p>{email}</p>
      <button onClick={onLogout} className={styles.btn}>
        Log out
      </button>
    </div>
  );
};

export default NavbarUser;
