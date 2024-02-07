import { useAppDispatch } from '@/app/appStore';
import { useTheme } from '@/app/providers/ThemeProvider';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import { setFilters } from '@/entities/news/model/newsSlice';
import styles from './styles.module.scss';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';

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
