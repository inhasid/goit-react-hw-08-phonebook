import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterInput from './ContactFiltr/ContactFiltr';

import styles from './phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Phone book</h1>
      <ContactForm />
      <h2 className={styles.h2}>Contacts</h2>
      <FilterInput />
      <ContactList />
    </div>
  );
};

export default Phonebook;
