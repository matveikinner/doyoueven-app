import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';
import Environment from '../../../environments/environment.types';
import IHttpService from '../../domain/interfaces/http.interface';

@injectable()
class HttpService implements IHttpService {
  private client: AxiosInstance;

  private options: AxiosRequestConfig = {
    baseURL: process.env[Environment.REACT_APP_BASE_URL],
    timeout: 10000,
  };

  constructor() {
    this.client = axios.create(this.options);
    console.log(this.options);
    this.client.interceptors.request.use((req) => {
      console.log(req);
      return req;
    });
    this.client.interceptors.response.use(
      (res) => {
        console.log(res);
        return res;
      },
      (err) => {
        console.log(err);
        return Promise.reject(err);
      }
    );
  }

  getClient(): AxiosInstance {
    if (!this.client) {
      throw Error('Attempt to use Http Service before it was initialized');
    }

    return this.client;
  }
}

export default HttpService;
