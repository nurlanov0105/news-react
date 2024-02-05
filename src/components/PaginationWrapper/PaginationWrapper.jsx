import Pagination from '../Pagination/Pagination';
import styles from './styles.module.scss';

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }) => {
   return (
      <>
         {top && <Pagination {...paginationProps} />}
         {children}
         {bottom && <Pagination {...paginationProps} />}
      </>
   );
};

export default PaginationWrapper;
