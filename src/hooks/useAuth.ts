import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState, isLoginState, userState } from '@/store/auth';
import { client, createQueryKey } from '@/query';
import { useRouter } from 'next/router';
import { LoginRequestBody, LoginResponse } from '@/query/types';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { queryUserData } from '@/query/userData';

const useAuth = () => {
  const setAuthState = useSetRecoilState(authState);

  const [isLogin, setIsLogin] = useState(false);
  const isLoginRecoilState = useRecoilValue(isLoginState);
  const user = useRecoilValue(userState);

  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const router = useRouter();

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

  const logout = () => {
    client.defaults.headers.common['Authorization'] = undefined;
    localStorage.removeItem('token');
    setAuthState({ token: null, user: null });
    window.alert('로그아웃 되었습니다.');
  };

  const login = async ({ email, password }: LoginRequestBody) => {
    try {
      setIsLoginLoading(true);
      const { data } = await client.post<LoginResponse>('/auth/login', {
        email,
        password,
      });
      // axios 인스턴스의 요청 헤더 설정에 인증 토큰 셋업
      client.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
      localStorage.setItem('token', data.token);
      setAuthState({ token: data.token, user: data.user });
      setLoginErrorMessage('');
      // TODO: 메인 페이지 or 이전 페이지로 이동
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setLoginErrorMessage(error.response.data.message ?? '');
        } else {
          setLoginErrorMessage(error.message);
        }
      } else {
        // Just a stock error
      }
      setIsLoginLoading(false);
    }
  };

  return {
    isLogin,
    isLoginLoading,
    loginErrorMessage,
    user,
    logout,
    login,
  };
};

export default useAuth;
