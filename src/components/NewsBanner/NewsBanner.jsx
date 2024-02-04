import styles from './styles.module.scss';
import { formatTimeAgo } from '../../utils/formatTimeAge';
import Image from '../Image/Image';

const NewsBanner = ({ item }) => {
   return (
      <div className={styles.banner}>
         <Image image={item?.image} />
         <h3 className={styles.title}>{item.title}</h3>
         <p className={styles.extra}>
            {formatTimeAgo(item.published)} by {item.author}
         </p>
      </div>
   );
};

export default NewsBanner;
