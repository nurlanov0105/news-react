import { useState } from 'react';
import styles from './styles.module.scss';

const Pagination = ({
   totalPages,
   handleNextPage,
   handlePreviousPage,
   handlePageClick,
   currentPage,
}) => {
   return (
      <div className={styles.pagination}>
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

         <button disabled={currentPage === 10} onClick={handleNextPage} className={styles.arrow}>
            {'>'}
         </button>
      </div>
   );
};

export default Pagination;
