import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { injectable } from 'inversify';
import Environment from '../../../environments/environment.types';
import IHttpService from '../interfaces/http.interface';

@injectable()
class HttpService implements IHttpService {
  private client: AxiosInstance;

  private options: AxiosRequestConfig = {
    baseURL: process.env[Environment.REACT_APP_BASE_URL],
    timeout: 10000,
  };

  constructor() {
    this.client = axios.create(this.options);
  }

  getClient(): AxiosInstance {
    if (!this.client) {
      throw Error('Attempt to use Http Service before it was initialized');
    }

    return this.client;
  }
}

export default HttpService;
