import Cookies from 'js-cookie';
import moment from 'moment';
import { AuthenticationResult } from '../models';

export const setToken = (AuthenticationResult: AuthenticationResult) => {
  Cookies.set('qboIdToken', AuthenticationResult.IdToken);
  Cookies.set('qboAccessToken', AuthenticationResult.AccessToken);
  if (AuthenticationResult.RefreshToken) {
    Cookies.set('qboRefreshToken', AuthenticationResult.RefreshToken);
  }
  Cookies.set('qboLoginDate', moment().format('YYYY-MM-DD HH:mm:ss'));
};

export const getIdToken = (): string | undefined => {
  return Cookies.get('qboIdToken');
};

export const getAccessToken = (): string | undefined => {
  return Cookies.get('qboAccessToken');
};

export const getRefreshToken = (): string | undefined => {
  return Cookies.get('qboRefreshToken');
};

export const getAuthenticationResult = (): AuthenticationResult => {
  return {
    IdToken: Cookies.get('qboIdToken') ?? '',
    AccessToken: Cookies.get('qboAccessToken') ?? '',
    RefreshToken: Cookies.get('qboRefreshToken') ?? '',
    LoginDate: Cookies.get('qboLoginDate') ?? '',
  };
};

export const removeToken = () => {
  Cookies.remove('qboIdToken');
  Cookies.remove('qboAccessToken');
  Cookies.remove('qboRefreshToken');
  Cookies.remove('qboLoginDate');
};
