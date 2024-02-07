import LatesNews from './LatesNews/LatesNews';
import styles from './styles.module.scss';
import NewsByFilters from '@/pages/main/ui/NewsByFilters/NewsByFilters';

const MainPage = () => {
   return (
      <main className={styles.main}>
         <LatesNews />
         <NewsByFilters />
      </main>
   );
};

export default MainPage;
