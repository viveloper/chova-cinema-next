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
  params,
}: {
  queryType: QueryType;
  params?: {
    movieCode?: string;
    reviewPage?: number;
    reviewCount?: number;
    reviewSortType?: ReviewSortType;
  };
}) => {
  switch (queryType) {
    case 'HOME_PAGE_DATA':
      return ['pages/home'];
    case 'MOVIES_PAGE_DATA':
      return ['pages/movies', 'main'];
    case 'MOVIES_DETAIL_PAGE_DATA':
      return ['pages/movies', params?.movieCode];
    case 'MOVIE_REVIEW_DATA':
      return [
        'review',
        params?.movieCode,
        params?.reviewPage,
        params?.reviewCount,
        params?.reviewSortType,
      ];
    default:
      return [];
  }
};
