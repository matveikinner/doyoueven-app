import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { v4 as uuid } from 'uuid';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import routes from './App.routes';
import themeOptions from './theme/custom.theme';
// import AuthGuardRoute from './core/presentation/utils/guards/auth.guard';
import { selectIsLoggedIn } from './auth/presentation/adapters/redux/user/user.selectors';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import withGuard from './core/presentation/utils/hocs/withGuard';

const App: FunctionComponent = () => {
  let theme = createMuiTheme({
    ...themeOptions,
    // For example to later replace theme type ('dark' | 'light) to one from global state management
    palette: { ...themeOptions.palette, type: 'light' },
  });
  theme = responsiveFontSizes(theme);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const AuthGuardRoute = withGuard(isLoggedIn, '/register')(Route);
  const DefaultGuardRoute = withGuard(!isLoggedIn, '/exercises')(Route);

  return (
    <ThemeProvider theme={theme}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            {routes.map((route) => {
              const { secure, ...rest } = route;
              if (secure) return <AuthGuardRoute key={uuid()} {...rest} />;
              return <DefaultGuardRoute key={uuid()} {...rest} />;
            })}
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </ThemeProvider>
  );
};

export default App;
