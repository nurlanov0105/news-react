import styles from './styles.module.scss';
import { formatDate } from '../../helper/formatDate';
import { themeIcons } from '../../assets';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
   const { isDark, toggleTheme } = useTheme();
   return (
      <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
         <div className={`${styles.info}`}>
            <h1 className={styles.title}>NEWS REACT</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
         </div>

         <img
            className={styles.theme}
            src={isDark ? themeIcons.light : themeIcons.dark}
            alt='theme icon'
            onClick={toggleTheme}
         />
      </header>
   );
};

export default Header;
