import React from 'react';
import useStyles from './styles';
import Topbar from './components/Topbar';

// todo: construct this
function LoggedIn(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Topbar />
      <div>side menu</div>
      <main>
        <div>content</div>
      </main>
      <div>Footer</div>
    </div>
  );
}

export default LoggedIn;
