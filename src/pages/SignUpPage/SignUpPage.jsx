import { useSelector, useDispatch } from 'react-redux';
//import { Navigate } from 'react-router-dom';
import styles from './sign-up-page.module.css';

import SignUpForm from 'components/SignUpForm/SignUpForm';
import Loader from 'components/Loader/Loader';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
  //selectIsLogin,
} from '../../redux/auth/auth-selectors';

const SignUpPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  // const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  // if (isLogin) {
  //   return <Navigate to="/phonebook" />;
  // }
  return (
    <main>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Please Sign Up</h1>
        {authLoading && <Loader />}
        <SignUpForm onSubmit={handleSignup} />
        {authError && <p style={{ color: 'red' }}>{authError}</p>}
      </div>
    </main>
  );
};

export default SignUpPage;
