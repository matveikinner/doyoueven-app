import { Container } from 'inversify';
import coreContainer from '../../core/data/inversify.config';
import AuthInteractor from '../domain/interactors/auth.interactor';
import IAuthInteractor from '../domain/interfaces/auth.interactor.interface';
import IAuthService from '../domain/interfaces/auth.service.interface';
import AUTH_TYPES from './auth.types';
import AuthService from './network/auth.service';

const container = new Container();
const inheritContainer = container.createChild();
const authContainer = Container.merge(coreContainer, inheritContainer);

authContainer.bind<IAuthService>(AUTH_TYPES.AuthService).to(AuthService);
authContainer.bind<IAuthInteractor>(AUTH_TYPES.AuthInteractor).to(AuthInteractor);

export default authContainer;
