import { RouteProps } from 'react-router-dom';
import Register from './auth/presentation/pages/register/Register';
import Exercise from './workouts/presentation/pages/exercise/Exercise';

interface MyRouteProps extends RouteProps {
  secure?: boolean;
}

const routes: MyRouteProps[] = [
  {
    path: '/register',
    exact: true,
    component: Register,
  },
  {
    path: '/exercises',
    exact: true,
    component: Exercise,
    secure: true,
  },
];

export default routes;
