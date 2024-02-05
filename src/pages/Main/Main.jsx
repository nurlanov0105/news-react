import { getNews } from '../../api/apiNews';
import { useDebounce } from '../../helper/hooks/useDebounce';
import { PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../helper/hooks/useFetch';
import { useFilters } from '../../helper/hooks/useFilters';

import LatesNews from '../../components/LatesNews/LatesNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

import styles from './styles.module.scss';

const Main = () => {
   const { filters, changeFilter } = useFilters({
      page_number: 1,
      page_size: PAGE_SIZE,
      category: null,
      keywords: '',
   });

   const debouncedKeywords = useDebounce(filters.keywords, 500);

   const { data, isLoading } = useFetch(getNews, {
      ...filters,
      keywords: debouncedKeywords,
   });

   return (
      <main className={styles.main}>
         <LatesNews isLoading={isLoading} banners={data && data.news} />

         <NewsByFilters
            filters={filters}
            changeFilter={changeFilter}
            isLoading={isLoading}
            news={data && data.news}
         />
      </main>
   );
};

export default Main;
