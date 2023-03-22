import axios from 'axios';
import { client } from '.';
import { LoginRequestBody, LoginResponse, SignupRequestBody, User } from './types';

export const queryUserData = async () => {
  const [{ data }] = await Promise.all([client.get<User>(`/user`)]);
  return data;
};

export const queryLoginData = async ({ email, password }: LoginRequestBody) => {
  try {
    const { data } = await client.post<LoginResponse>('/auth/login', {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return new Error(error.response.data.message ?? '');
      } else {
        throw new Error(error.message);
      }
    } else {
      // Just a stock error
      throw error;
    }
  }
};

export const addUserData = async (data: SignupRequestBody) => {
  const { data: review } = await client.post<LoginResponse>('/auth/signup', data);
  return review;
};
