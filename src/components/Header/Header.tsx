import styles from './styles.module.scss';
import { formatDate } from '../../helper/formatDate';

const Header = () => {
   return (
      <header className={styles.header}>
         <h1 className={styles.title}>NEWS REACT</h1>
         <p className={styles.date}>{formatDate(new Date())}</p>
      </header>
   );
};

export default Header;
