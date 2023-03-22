import { client } from '.';
import { LoginRequestBody, LoginResponse, User } from './types';

export const queryUserData = async () => {
  const [{ data }] = await Promise.all([client.get<User>(`/user`)]);
  return data;
};

export const queryLoginData = async ({ email, password }: LoginRequestBody) => {
  const { data } = await client.post<LoginResponse>('/auth/login', {
    email,
    password,
  });
  return data;
};

// export const addUserData = async (data: UserPostData) => {
//   const { data: review } = await client.post<Review>('/review', data);
//   return review;
// };
