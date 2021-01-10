import { IonPage, IonHeader, IonContent } from '@ionic/react';
import { AppBar, Toolbar, Typography, Grid, TextField, Button } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import Loader from '../../../../core/presentation/components/loader/Loader';
import Credentials from '../../../domain/entities/models/credentials.model';
import { registerUserRequest } from '../../adapters/redux/user/user.actions';
import useStyles, { Row } from './Register.style';

const Register: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState<Credentials>({ email: '', password: '' });

  return (
    <IonPage>
      <IonHeader>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Register
            </Typography>
          </Toolbar>
        </AppBar>
      </IonHeader>
      <IonContent fullscreen>
        <Grid container>
          <Row item xs={12}>
            <TextField
              className={classes.textField}
              required
              type='email'
              label='Email'
              placeholder='Email'
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
            <TextField
              className={classes.textField}
              required
              type='password'
              label='Password'
              placeholder='Password'
              onChange={(e) => setState({ ...state, password: e.target.value })}
            />
            <Button onClick={() => dispatch(registerUserRequest(state))}>Register</Button>
          </Row>
        </Grid>
        <Loader />
      </IonContent>
    </IonPage>
  );
};

export default Register;
