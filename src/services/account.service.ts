import QboAccount from '../models/qbo_account';
import requester from './request';
import { AuthenticationResult } from '../models';

const accountService = {
  signIn: (query: { email: string; password: string }) =>
    requester.post<{ AuthenticationResult: AuthenticationResult }>(
      '/sign-in',
      query
    ),
  signOut: (data: { accessToken: string | undefined }) =>
    requester.post('/sign-out', data),
  refreshToken: (refreshToken: string | undefined) =>
    requester.post<{ AuthenticationResult: AuthenticationResult }>(
      '/refresh-token',
      {
        refreshToken,
      }
    ),
  profile: (data: { accessToken: string | undefined }) =>
    requester.post<{ user: QboAccount }>('/user-profile', data),
  forgetPassword: (query: any) => requester.post('/forget-password', query),
};

export default accountService;
