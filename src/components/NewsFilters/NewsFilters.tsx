import { useTheme } from '../../context/ThemeContext';
import { IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { setFilters } from '../../store/slices/newsSlice';

import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.scss';

interface Props {
   filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
   const dispatch = useAppDispatch();

   const { data } = useGetCategoriesQuery(null);

   const { isDark } = useTheme();

   return (
      <div className={styles.filters}>
         {data && (
            <Slider isDark={isDark}>
               <Categories
                  categories={data.categories}
                  selectedCategory={filters.category}
                  setSelectedCategory={(category) =>
                     dispatch(setFilters({ key: 'category', value: category }))
                  }
               />
            </Slider>
         )}

         <Search
            keywords={filters.keywords}
            setKeywords={(keywords) => dispatch(setFilters({ key: 'keywords', value: keywords }))}
         />
      </div>
   );
};

export default NewsFilters;
