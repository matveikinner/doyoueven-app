import { RouteProps } from 'react-router-dom';
import Home from './pages/Home';
import Exercise from './workouts/presentation/pages/exercise/Exercise';

const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/exercises',
    exact: true,
    component: Exercise,
  },
];

export default routes;
