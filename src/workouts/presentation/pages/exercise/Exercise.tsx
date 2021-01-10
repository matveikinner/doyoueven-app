import React, { FunctionComponent, useState } from 'react';
import { AppBar, Button, Grid, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
import { IonContent, IonHeader, IonIcon, IonPage } from '@ionic/react';
import { useDispatch } from 'react-redux';
import useStyles, { Row } from './Exercise.style';
import { createExerciseRequest } from '../../adapters/redux/exercise/exercise.actions';
import ExerciseModel from '../../../domain/entities/models/exercise.model';
import Loader from '../../../../core/presentation/components/loader/Loader';

const Exercise: FunctionComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = useState<ExerciseModel>({ movement: '', sets: 0, reps: 0 });

  return (
    <IonPage>
      <IonHeader>
        <AppBar position='static'>
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
              <IonIcon icon='menu-outline' />
            </IconButton>
            <Typography variant='h6' className={classes.title}>
              Welcome
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
              label='Movement'
              placeholder='Enter Movement'
              onChange={(e) => setState({ ...state, movement: e.target.value })}
            />
            <TextField
              className={classes.textField}
              required
              type='number'
              label='Sets'
              placeholder='Enter Sets'
              onChange={(e) => setState({ ...state, sets: parseInt(e.target.value, 10) })}
            />
            <TextField
              className={classes.textField}
              required
              type='number'
              label='Repetitions'
              placeholder='Enter Repetitions'
              onChange={(e) => setState({ ...state, reps: parseInt(e.target.value, 10) })}
            />
            <Button onClick={() => dispatch(createExerciseRequest(state))}>Create</Button>
          </Row>
        </Grid>
        <Loader />
      </IonContent>
    </IonPage>
  );
};

export default Exercise;
