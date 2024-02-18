import styles from './home-page.module.css';
import img from '../../images/logo512.png';

const HomePage = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Phone book!</h1>
        <h2 className={styles.h2}>Create on React.</h2>
        <img src={img} alt="React icon" className={styles.img}></img>
      </div>
    </section>
  );
};

export default HomePage;
