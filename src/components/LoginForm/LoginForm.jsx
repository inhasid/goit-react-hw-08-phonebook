import { useState, useId } from 'react';

import styles from './login-form.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const emailId = useId();
  const passwordId = useId();

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor={emailId} className={styles.label}>
          Email:
        </label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          autoComplete="username"
          className={styles.input}
          placeholder="Email"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={passwordId} className={styles.label}>
          Password:
        </label>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          autoComplete="current-password"
          className={styles.input}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit" className={styles.btn}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
