import axios from 'axios';
import { isBrowser } from '@/utils/checkRuntimeEnv';
import { QueryType, ReviewSortType } from './types';

const token = isBrowser ? localStorage.getItem('token') : null;

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_BASE_URL,
});
client.defaults.headers.common['Authorization'] = 'Bearer ' + token;

export const createQueryKey = ({
  queryType,
  options,
}: {
  queryType: QueryType;
  options?: {
    movieCode?: string;
    reviewPage?: number;
    reviewCount?: number;
    reviewSortType?: ReviewSortType;
    email?: string;
    password?: string;
  };
}) => {
  switch (queryType) {
    case 'HOME_PAGE_DATA':
      return ['pages/home'];
    case 'MOVIES_PAGE_DATA':
      return ['pages/movies', 'main'];
    case 'MOVIES_DETAIL_PAGE_DATA':
      return ['pages/movies', options?.movieCode].filter((item) => item !== undefined);
    case 'MOVIE_REVIEW_DATA':
    case 'MOVIE_REVIEW_INFINITE_DATA':
      return [
        'review',
        options?.movieCode,
        options?.reviewPage,
        options?.reviewCount,
        options?.reviewSortType,
      ].filter((item) => item !== undefined);
    case 'USER_DATA':
      return ['user'];
    case 'LOGIN_DATA':
      return ['login', options?.email, options?.password].filter((item) => item !== undefined);
    default:
      return [];
  }
};
