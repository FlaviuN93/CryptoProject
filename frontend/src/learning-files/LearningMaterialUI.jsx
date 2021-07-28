import React, { useState } from 'react';
import './App.css';

import { Button, Checkbox, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
import { FormControlLabel, TextField, Container } from '@material-ui/core';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Paper, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

import { orange } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/core/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: '15px',
    color: 'white',
    padding: '0 30px',
  },
});

const theme = createTheme({
  typography: {
    h3: {
      fontSize: 24,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
        }
        label='testing checkbox'
      ></FormControlLabel>
    </div>
  );
}

function LearningMaterialUi() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth='sm'>
          {' '}
          <Button
            startIcon={<SaveIcon />}
            href='#'
            size='large'
            variant='contained'
            color='primary'
          >
            Hello World
          </Button>
          <br />
          <Typography variant='h3'>Welcome to MUI</Typography>
          <Typography variant='h5'>Learn how to use material ui</Typography>
          <ButtonStyled />
          <br />
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6'>MUI Theming</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>
          <br />
          <Grid container spacing={4} justify='center'>
            <Grid item xs={12} sm={6}>
              <Paper style={{ height: 75, width: 50 }}></Paper>
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }}></Paper>
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }}></Paper>
            </Grid>
            <Grid item>
              <Paper style={{ height: 75, width: 50 }}></Paper>
            </Grid>
          </Grid>
          <TextField
            variant='filled'
            color='secondary'
            type='email'
            label='Time'
          />
          <CheckBoxExample />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default LearningMaterialUi;
