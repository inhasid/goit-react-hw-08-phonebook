import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { login } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
  selectIsLogin,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const isLogin = useSelector(selectIsLogin);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }

  return (
    <div>
      <h1>Login page</h1>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};

export default LoginPage;
