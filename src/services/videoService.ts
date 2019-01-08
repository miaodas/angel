import axios from 'axios';
import { BASE_URL, API_VERSION } from 'react-native-dotenv';

const resources = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}/`,
  timeout: 6000,
});

resources.interceptors.request.use(
  config => {
    // eslint-disable-next-line no-param-reassign
    // config.headers.common.Authorization = apiKey;
    // eslint-disable-next-line no-param-reassign
    // config.headers.common['X-Client-Version'] = 1;
    return config;
  },
  error => Promise.reject(error),
);

resources.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // eslint-disable-next-line no-param-reassign
      error.message =
        (error.response.data && error.response.data.message) || 'system error';
    } else {
      // eslint-disable-next-line no-param-reassign
      error.message = 'network error';
    }
    return Promise.reject(error);
  },
);

export default resources;
