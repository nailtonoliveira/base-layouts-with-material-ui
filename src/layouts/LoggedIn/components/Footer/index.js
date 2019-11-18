import React from 'react';

import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <span>&copy; {year} - Awesome App</span>
    </footer>
  );
}

export default Footer;
