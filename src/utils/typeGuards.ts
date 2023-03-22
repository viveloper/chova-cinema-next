import { LoginResponse } from '@/query/types';

export function isLoginResponse(arg: any): arg is LoginResponse {
  return 'token' in arg;
}
