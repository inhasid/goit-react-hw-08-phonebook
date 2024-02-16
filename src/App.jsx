import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from './redux/auth/auth-operations';

import SharedLayout from './components/SharedLayout/SharedLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage/SignUpPage'));
const Phonebook = lazy(() => import('./components/Phonebook/Phonebook'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="phonebook" element={<Phonebook />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
