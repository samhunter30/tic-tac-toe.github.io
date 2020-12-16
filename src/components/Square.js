import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
//Styling purple buttoms in bottom
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: purple,
  },
});

const style = {
    margin: '5px',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const Square = ({ value , onClick }) => (
    <ThemeProvider theme={theme}>
    <Button style={style} variant="outlined" color="primary" className={useStyles.margin} onClick={onClick}>
        {value}
    </Button>
    </ThemeProvider>
);

export default Square;