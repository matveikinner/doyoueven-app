import { AxiosInstance } from 'axios';

export interface IHttpService {
  getClient(): AxiosInstance;
}
