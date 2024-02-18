import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

import {
  fetchContacts,
  deleteContact,
} from '../../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../../redux/selectors';

import styles from './contact-list.module.css';

const ContactList = () => {
  const items = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={styles.item}>
      <p>
        {' '}
        {name}: {number}{' '}
      </p>
      <button
        onClick={() => handleDeleteContact(id)}
        type="button"
        className={styles.btn}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
};

export default ContactList;
