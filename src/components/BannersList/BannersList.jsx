import styles from './styles.module.scss';
import withSkeleton from '../../helper/hocs/withSkeleton';
import NewsBanner from '../NewsBanner/NewsBanner';

const BannersList = ({ banners }) => {
   return (
      <ul className={styles.banners}>
         {banners?.map((banner) => {
            return <NewsBanner key={banner.id} item={banner} />;
         })}
      </ul>
   );
};

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
