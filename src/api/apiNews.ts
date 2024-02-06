import axios from 'axios';
import { CategoriesApiRespone, NewsApiRespone, ParamsType } from '../interfaces';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (params?: ParamsType): Promise<NewsApiRespone> => {
   try {
      const { page_number = 1, page_size = 10, category, keywords } = params || {};

      const response = await axios.get<NewsApiRespone>(`${BASE_URL}search`, {
         params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
         },
      });

      return response.data;
   } catch (error) {
      console.log(error);
      return { news: [], page: 1, status: 'error' };
   }
};

export const getLatestNews = async (): Promise<NewsApiRespone> => {
   try {
      const response = await axios.get<NewsApiRespone>(`${BASE_URL}latest-news`, {
         params: {
            apiKey: API_KEY,
         },
      });

      return response.data;
   } catch (error) {
      console.log(error);
      return { news: [], page: 1, status: 'error' };
   }
};
export const getCategories = async (): Promise<CategoriesApiRespone> => {
   try {
      const response = await axios.get<CategoriesApiRespone>(`${BASE_URL}available/categories`, {
         params: {
            apiKey: API_KEY,
         },
      });

      return response.data;
   } catch (error) {
      console.log(error);
      return { categories: [], description: '', status: 'error' };
   }
};
