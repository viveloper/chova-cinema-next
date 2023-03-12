import { atom, selector } from 'recoil';
import { isBrowser } from '@/utils/checkRuntimeEnv';
import { User } from '@/query/types';

const token = isBrowser ? localStorage.getItem('token') : null;

type Auth = {
  token: string | null;
  user: User | null;
};

export const authState = atom<Auth>({
  key: 'authState',
  default: {
    token,
    user: null,
  },
});

export const isLoginState = selector<boolean>({
  key: 'isLoginState',
  get: ({ get }) => {
    const auth = get(authState);

    return !!auth.token;
  },
});

export const userState = selector<User | null>({
  key: 'userState',
  get: ({ get }) => {
    const auth = get(authState);

    return auth.user;
  },
});
