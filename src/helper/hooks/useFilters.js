import { useState } from 'react';

export const useFilters = (initalFiltes) => {
   const [filters, setFilters] = useState(initalFiltes);

   const changeFilter = (key, value) => {
      setFilters((prev) => {
         return { ...prev, [key]: value };
      });
   };

   return { filters, changeFilter };
};
