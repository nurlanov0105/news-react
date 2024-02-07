import { INews, NewsItem } from '@/entities/news';
import styles from './styles.module.scss';
import withSkeleton from '@/shared/hocs/withSkeleton';

interface Props {
   news?: INews[];
}

const NewsList = ({ news }: Props) => {
   return (
      <ul className={styles.list}>
         {news?.map((item) => (
            <NewsItem key={item.id} item={item} />
         ))}
      </ul>
   );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10, 'column');

export default NewsListWithSkeleton;
