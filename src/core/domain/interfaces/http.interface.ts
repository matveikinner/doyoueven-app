import { AxiosInstance } from 'axios';

export default interface IHttpService {
  getClient(): AxiosInstance;
}
