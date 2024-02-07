import { CategoriesType } from '@/entities/category';

export interface INews {
   author: string;
   category: CategoriesType[];
   description: string;
   id: string;
   image: string;
   language: string;
   published: string;
   title?: string;
   url: string;
}

export interface NewsApiRespone {
   news: INews[];
   page: number;
   status: string;
}
