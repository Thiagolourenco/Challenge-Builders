/**
 * @format
 */

import axios, {AxiosInstance} from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});
