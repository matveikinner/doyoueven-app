import { Button, Grid, styled, withTheme } from '@material-ui/core';
import { createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flexGrow: 1,
    },
    textField: {
      width: '100%',
      maxWidth: '256px',
      marginTop: theme.spacing(1),
    },
  })
);

export const Row = styled(Grid)(() => ({
  textAlign: 'center',
}));

export const StyledButton = styled(withTheme(Button))(({ theme }) => ({
  margin: theme.spacing(2),
}));

export default useStyles;
