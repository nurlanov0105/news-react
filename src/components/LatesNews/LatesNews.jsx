import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helper/hooks/useFetch';
import BannersList from '../BannersList/BannersList';
import styles from './styles.module.scss';

const LatesNews = () => {
   const { data: dataLatestNews, isLoading } = useFetch(getLatestNews);

   return (
      <section className={styles.section}>
         <BannersList banners={dataLatestNews && dataLatestNews.news} isLoading={isLoading} />
      </section>
   );
};

export default LatesNews;
