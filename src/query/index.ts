import axios from 'axios';
import { QueryType, ReviewSortType } from './types';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_BASE_URL,
});

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
