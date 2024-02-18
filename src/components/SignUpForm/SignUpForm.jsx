import { useState, useId } from 'react';

import styles from './sign-up-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = ({ onSubmit }) => {
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

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, email, password } = state;

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor={nameId} className={styles.label}>
          Name
        </label>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          id={nameId}
          placeholder="Name"
          minLength={3}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={emailId} className={styles.label}>
          Email
        </label>
        <input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          id={emailId}
          placeholder="Email"
          autoComplete="username"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={passwordId} className={styles.label}>
          Password
        </label>
        <input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          id={passwordId}
          minLength={7}
          placeholder="Password"
          autoComplete="current-password"
          className={styles.input}
          required
        />
      </div>
      <button type="submit" className={styles.btn}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
