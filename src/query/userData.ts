import axios from 'axios';
import { client } from '.';
import { LoginRequestBody, LoginResponse, SignupRequestBody, User } from './types';

export const queryUserData = async () => {
  const [{ data }] = await Promise.all([client.get<User>(`/user`)]);
  return data;
};

export const postLoginData = async ({ email, password }: LoginRequestBody) => {
  const { data } = await client.post<LoginResponse>('/auth/login', {
    email,
    password,
  });
  return data;
};

export const addUserData = async (data: SignupRequestBody) => {
  const { data: review } = await client.post<LoginResponse>('/auth/signup', data);
  return review;
};
