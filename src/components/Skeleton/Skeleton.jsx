import styles from './styles.module.scss';

const Skeleton = ({ count = 1, type = 'banner' }) => {
   return (
      <>
         {count > 1 ? (
            <ul className={styles.list}>
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
