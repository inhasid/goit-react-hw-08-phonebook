import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cannot found this page</h1>
      <Link to="/">To home page</Link>
    </div>
  );
};

export default NotFoundPage;
