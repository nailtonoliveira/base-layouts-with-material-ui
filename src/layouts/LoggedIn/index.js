import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme, useMediaQuery } from '@material-ui/core';

import useStyles from './styles';
import Topbar from './components/Topbar';
import Sidemenu from './components/Sidemenu';
import Footer from './components/Footer';

// todo: construct this
function LoggedIn({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const [sidemenuOpen, setSidemenuOpen] = useState(isDesktop);
  const handleOpen = () => {
    setSidemenuOpen(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <Topbar onMenuButtonClick={handleOpen} />
      <Sidemenu
        open={sidemenuOpen}
        onClose={handleOpen}
        variant={isDesktop ? 'permanent' : 'temporary'}
        isDesktop={isDesktop}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
}

LoggedIn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoggedIn;
