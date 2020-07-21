import React, { useState } from 'react';

import classes from './Join.module.css';

const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const buttonStyle = [];
  buttonStyle.push(classes.button);
  buttonStyle.push(classes.mt20);

  return (
    <div className={classes.joinOuterContainer}>
      <div className={classes.joinInnerContainer}>
        <h1 className={classes.heading}>Join</h1>
        <div>
          <input
            placeholder='Username'
            className={classes.joinInput}
            type='text'
          />
        </div>
        <div>
          <input
            placeholder='Password'
            className={classes.joinInput}
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        {/* TODO Authenticate user */}
        <button className={buttonStyle.join(' ')} type='submit'>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Join;
