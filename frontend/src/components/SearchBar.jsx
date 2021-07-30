import React from 'react';
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: 200,
  },
  input: {
    marginLeft: theme.spacing(1),
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Paper component='form' className={classes.root}>
      <InputBase placeholder='Search' className={classes.input} />
      <IconButton
        type='submit'
        aria-label='search'
        className={classes.iconButton}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
