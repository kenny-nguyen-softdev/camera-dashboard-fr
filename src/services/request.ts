import axios from 'axios';

const requester = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
requester.interceptors.request.use(async (config) => {
  // const session = await getSession({ req })
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});
// Add a response interceptor
requester.interceptors.response.use(
  function (response: any) {
    return Promise.resolve(response.data);
  },
  function (error: any) {
    if (error.response) {
      // The request was made and the server responded with a status code
      if (error.response?.status
        && ( error.response.status === 401 || error.response.status === 404)
        && !window.location.pathname.includes('/login')) {
        // Do not redirect back to login if API return 401
        if (!document.referrer.includes('/login')) {
          console.log('Normal 401 error')
          removeAxiosToken();
          removeAxiosToken();
          window.location.href = '/login';
        } else {
          console.log('Login 401 error')
          // reload page
          window.location.href = '/';
        }
      }
      error.status = error.response.status;
      error.message = error.response.statusText;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
    }
    return Promise.reject(error);
  }
);

export function setAxiosToken(token: string) {
  requester.defaults.headers.common.Authorization = 'Bearer ' + token;
}

export function removeAxiosToken() {
  requester.defaults.headers.common.Authorization = '';
}
export default requester;
