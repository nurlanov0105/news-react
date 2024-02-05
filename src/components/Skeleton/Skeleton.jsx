import styles from './styles.module.scss';

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }) => {
   return (
      <>
         {count > 1 ? (
            <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
               {[...Array(count)].map((_, i) => (
                  <li key={i} className={type === 'banner' ? styles.banner : styles.item}></li>
               ))}
            </ul>
         ) : (
            <li className={type === 'banner' ? styles.banner : styles.item}></li>
         )}
      </>
   );
};

export default Skeleton;
