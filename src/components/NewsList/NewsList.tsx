import withSkeleton from '../../helper/hocs/withSkeleton';
import { INews } from '../../interfaces';
import NewsItem from '../NewsItem/NewsItem';
import styles from './styles.module.scss';

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
