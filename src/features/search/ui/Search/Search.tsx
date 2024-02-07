import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './styles.module.scss';

interface Props {
   keywords: string;
   setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
   const { isDark } = useTheme();
   return (
      <div className={`${styles.search} ${isDark ? 'dark' : 'light'}`}>
         <input
            type='text'
            className={styles.input}
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder='Search...'
         />
      </div>
   );
};

export default Search;
