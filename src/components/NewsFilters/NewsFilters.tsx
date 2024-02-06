import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helper/hooks/useFetch';
import { CategoriesApiRespone, IFilters } from '../../interfaces';

import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';
import styles from './styles.module.scss';

interface Props {
   filters: IFilters;
   changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
   const { data: dataCategories } = useFetch<CategoriesApiRespone, null>(getCategories);

   return (
      <div className={styles.filters}>
         {dataCategories && (
            <Slider>
               <Categories
                  categories={dataCategories.categories}
                  selectedCategory={filters.category}
                  setSelectedCategory={(category) => changeFilter('category', category)}
               />
            </Slider>
         )}

         {/* <Slider>
            {dataCategories && (
               <Categories
                  categories={dataCategories.categories}
                  selectedCategory={filters.category}
                  setSelectedCategory={(category) => changeFilter('category', category)}
               />
            )}
         </Slider> */}

         <Search
            keywords={filters.keywords}
            setKeywords={(keywords) => changeFilter('keywords', keywords)}
         />
      </div>
   );
};

export default NewsFilters;
