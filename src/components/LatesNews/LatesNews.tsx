import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helper/hooks/useFetch';
import { NewsApiRespone } from '../../interfaces';
import BannersList from '../BannersList/BannersList';
import styles from './styles.module.scss';

const LatesNews = () => {
   const { data, isLoading } = useFetch<NewsApiRespone, null>(getLatestNews);

   return (
      <section className={styles.section}>
         <BannersList banners={data && data.news} isLoading={isLoading} />
      </section>
   );
};

export default LatesNews;
