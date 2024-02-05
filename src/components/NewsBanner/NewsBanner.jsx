import styles from './styles.module.scss';
import { formatTimeAgo } from '../../helper/formatTimeAge';
import Image from '../Image/Image';
import withSkeleton from '../../helper/hocs/withSkeleton';

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

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBannerWithSkeleton;
