import { client } from '.';
import { User } from './types';

export const queryUserData = async () => {
  const [{ data }] = await Promise.all([client.get<User>(`/user`)]);
  return data;
};
