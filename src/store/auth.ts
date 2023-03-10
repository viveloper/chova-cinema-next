import { atom, selector } from 'recoil';
import { isBrowser } from '@/utils/checkRuntimeEnv';

const token = isBrowser ? localStorage.getItem('token') : null;

type Auth = {
  token: string | null;
};

export const authState = atom<Auth>({
  key: 'authState',
  default: {
    token,
  },
});

export const isLoginState = selector<boolean>({
  key: 'isLoginState',
  get: ({ get }) => {
    const auth = get(authState);

    return !!auth.token;
  },
});
