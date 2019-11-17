import React, { useState } from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

import useStyles from './styles';
import Topbar from './components/Topbar';
import Sidemenu from './components/Sidemenu';

// todo: construct this
function LoggedIn() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  const [open, setOpen] = useState(isDesktop);
  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className={classes.root}>
      <Topbar onMenuButtonClick={handleOpen} />
      <Sidemenu
        open={open}
        onClose={handleOpen}
        variant={isDesktop ? 'permanent' : 'temporary'}
        isDesktop={isDesktop}
      />
      <main>
        <div>content</div>
      </main>
      <div>Footer</div>
    </div>
  );
}

export default LoggedIn;
