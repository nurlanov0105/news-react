import { formatTimeAgo } from '../../utils/formatTimeAge';
import styles from './styles.module.scss';

const NewsItem = ({ item }) => {
   return (
      <li className={styles.card}>
         <div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
         <div className={styles.body}>
            <h4 className={styles.title}>{item.title}</h4>
            <p className='extra'>
               {formatTimeAgo(item.published)} by {item.author}
            </p>
         </div>
      </li>
   );
};

export default NewsItem;
