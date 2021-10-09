import React, { useState } from 'react';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './SearchBar.scss';
import { CSSTransition } from 'react-transition-group';

const SearchBar = () => {
  const [searchToggle, setSearchToggle] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const toggleClick = () => setSearchToggle(!searchToggle);

  const handleSearch = (event) => setSearchInput(event.target.value);

  return (
    <>
      {' '}
      <CSSTransition
        in={searchToggle}
        timeout={{ exit: 500, enter: 300 }}
        classNames='search-transition'
      >
        <div>
          {searchToggle ? (
            <div className='close-container'>
              <IconButton
                aria-label='search'
                onClick={toggleClick}
                id='search-button'
              >
                <div className='search-icon'></div>
              </IconButton>
            </div>
          ) : (
            <Paper component='form' id='open-container'>
              <IconButton id='search-button' onClick={toggleClick}>
                <div className='search-icon'></div>
              </IconButton>
              <InputBase
                placeholder='Search'
                className='search-input'
                onChange={handleSearch}
                value={searchInput}
              />{' '}
              <IconButton
                onClick={() => setSearchInput('')}
                style={{ backgroundColor: 'white', color: 'white' }}
              >
                <CloseIcon className='close-icon' />{' '}
              </IconButton>
            </Paper>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default SearchBar;
