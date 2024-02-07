import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './styles.module.scss';
import { themeIcons } from '@/shared/assets';

const ThemeButton = () => {
   const { isDark, toggleTheme } = useTheme();
   return (
      <img
         className={styles.theme}
         src={isDark ? themeIcons.light : themeIcons.dark}
         alt='theme icon'
         onClick={toggleTheme}
      />
   );
};

export default ThemeButton;
