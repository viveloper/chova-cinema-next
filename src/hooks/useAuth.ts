import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, isLoginState, userState } from '@/store/auth';
import { client, createQueryKey } from '@/query';
import { useRouter } from 'next/router';
import { LoginRequestBody, LoginResponse } from '@/query/types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { queryLoginData, queryUserData } from '@/query/userData';

const useAuth = () => {
  const setAuthState = useSetRecoilState(authState);
  const isLoginRecoilState = useRecoilValue(isLoginState);
  const user = useRecoilValue(userState);

  const [isLogin, setIsLogin] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  // reference : https://medium.com/@viveloper/react-hydration-error-39b8cfec6fd5
  useEffect(() => {
    setIsLogin(isLoginRecoilState);
  }, [isLoginRecoilState]);

  useQuery({
    queryKey: createQueryKey({ queryType: 'USER_DATA' }),
    queryFn: queryUserData,
    onSuccess: (data) => {
      setAuthState((prev) => ({ ...prev, user: data }));
    },
    enabled: isLogin,
  });

  const { isFetching } = useQuery({
    queryKey: createQueryKey({ queryType: 'LOGIN_DATA', options: { email, password } }),
    queryFn: () => queryLoginData({ email, password }),
    enabled: !!email && !!password,
    onSuccess: (data) => {
      // axios 인스턴스의 요청 헤더 설정에 인증 토큰 셋업
      client.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
      localStorage.setItem('token', data.token);
      setAuthState(data);
      setLoginErrorMessage('');
      // TODO: 메인 페이지 or 이전 페이지로 이동
      router.push('/');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setLoginErrorMessage(error.response.data.message ?? '');
        } else {
          setLoginErrorMessage(error.message);
        }
      } else {
        // Just a stock error
      }
    },
  });

  const login = ({ email, password }: LoginRequestBody) => {
    setEmail(email);
    setPassword(password);
  };

  const logout = () => {
    client.defaults.headers.common['Authorization'] = undefined;
    localStorage.removeItem('token');
    setAuthState({ token: null, user: null });
    window.alert('로그아웃 되었습니다.');
  };

  return {
    isLogin,
    isLoginLoading: isFetching,
    loginErrorMessage,
    user,
    logout,
    login,
  };
};

export default useAuth;
