import LatesNews from '../../components/LatesNews/LatesNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

import styles from './styles.module.scss';

const Main = () => {
   return (
      <main className={styles.main}>
         <LatesNews />
         <NewsByFilters />
      </main>
   );
};

export default Main;
