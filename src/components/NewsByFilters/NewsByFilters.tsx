import { TOTAL_PAGES } from '../../constants/constants';
import { useDebounce } from '../../helper/hooks/useDebounce';

import NewsList from '../../components/NewsList/NewsList';
import NewsFilters from '../NewsFilters/NewsFilters';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { useGetNewsQuery } from '../../store/services/newsApi';

import styles from './styles.module.scss';
import { useAppSelector, useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

const NewsByFilters = () => {
   const dispatch = useAppDispatch();

   const filters = useAppSelector((state) => state.news.filters);
   const news = useAppSelector((state) => state.news.news);

   const debouncedKeywords = useDebounce(filters.keywords, 500);
   const { isLoading } = useGetNewsQuery({ ...filters, keywords: debouncedKeywords });

   const handleNextPage = () => {
      if (filters.page_number < TOTAL_PAGES) {
         dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }));
      }
   };

   const handlePreviousPage = () => {
      if (filters.page_number > 1) {
         dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }));
      }
   };

   const handlePageClick = (pageNumber: number) => {
      dispatch(setFilters({ key: 'page_number', value: pageNumber }));
   };

   return (
      <section className={styles.section}>
         <NewsFilters filters={filters} />

         <PaginationWrapper
            top
            bottom
            totalPages={TOTAL_PAGES}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            handlePageClick={handlePageClick}
            currentPage={filters.page_number}>
            <NewsList isLoading={isLoading} news={news} />
         </PaginationWrapper>
      </section>
   );
};

export default NewsByFilters;
