import { Container } from 'inversify';
import IHttpService from '../domain/interfaces/http.interface';
import HttpService from '../domain/network/http.service';
import TYPES from './core.types';

const coreContainer = new Container();

coreContainer.bind<IHttpService>(TYPES.HttpService).to(HttpService);

export default coreContainer;
