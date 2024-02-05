import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFilters } from '../../helper/hooks/useFilters';
import { useDebounce } from '../../helper/hooks/useDebounce';
import { useFetch } from '../../helper/hooks/useFetch';
import { getNews } from '../../api/apiNews';

import NewsList from '../../components/NewsList/NewsList';
import NewsFilters from '../NewsFilters/NewsFilters';

import styles from './styles.module.scss';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';

const NewsByFilters = () => {
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

   const handleNextPage = () => {
      if (filters.page_number < TOTAL_PAGES) {
         changeFilter('page_number', filters.page_number + 1);
      }
   };

   const handlePreviousPage = () => {
      if (filters.page_number > 1) {
         changeFilter('page_number', filters.page_number - 1);
      }
   };

   const handlePageClick = (pageNumber) => {
      changeFilter('page_number', pageNumber);
   };

   return (
      <section className={styles.section}>
         <NewsFilters filters={filters} changeFilter={changeFilter} />

         <PaginationWrapper
            top
            bottom
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={filters.page_number}>
            <NewsList isLoading={isLoading} news={data?.news} />
         </PaginationWrapper>
      </section>
   );
};

export default NewsByFilters;
