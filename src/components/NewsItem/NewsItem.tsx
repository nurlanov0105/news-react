import { formatTimeAgo } from '../../helper/formatTimeAge';
import { INews } from '../../interfaces';
import styles from './styles.module.scss';

interface Props {
   item: INews;
}

const NewsItem = ({ item }: Props) => {
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
