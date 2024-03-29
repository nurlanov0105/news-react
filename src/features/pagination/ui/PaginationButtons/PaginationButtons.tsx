import { useTheme } from '@/app/providers/ThemeProvider';
import { IPaginationProps } from '../../model/types';
import styles from './styles.module.scss';

const PaginationButtons = ({
   totalPages,
   handleNextPage,
   handlePreviousPage,
   handlePageClick,
   currentPage,
}: IPaginationProps) => {
   const { isDark } = useTheme();
   return (
      <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
         <button disabled={currentPage === 1} onClick={handlePreviousPage} className={styles.arrow}>
            {'<'}
         </button>

         <div className={styles.list}>
            {[...Array(totalPages)].map((_, i) => {
               return (
                  <button
                     key={i}
                     disabled={i + 1 === currentPage}
                     className={styles.pageNumber}
                     onClick={() => handlePageClick(i + 1)}>
                     {i + 1}
                  </button>
               );
            })}
         </div>

         <button
            disabled={currentPage >= totalPages}
            onClick={handleNextPage}
            className={styles.arrow}>
            {'>'}
         </button>
      </div>
   );
};

export default PaginationButtons;
