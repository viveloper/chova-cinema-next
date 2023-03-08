import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_BASE_URL,
});

export const createQueryKey = ({
  queryType,
  params,
}: {
  queryType: 'HOME_PAGE_DATA' | 'MOVIES_PAGE_DATA' | 'MOVIES_DETAIL_PAGE_DATA';
  params?: {
    movieCode: string;
  };
}) => {
  switch (queryType) {
    case 'HOME_PAGE_DATA':
      return ['pages/home'];
    case 'MOVIES_PAGE_DATA':
      return ['pages/movies'];
    case 'MOVIES_DETAIL_PAGE_DATA':
      return [`pages/movies`, params?.movieCode];
    default:
      return [];
  }
};
