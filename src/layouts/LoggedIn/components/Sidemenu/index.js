import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';

import useStyles from './styles';
import routes from '../../../../routes/routes';
import SidemenuOptions from './components/SidemenuOptions';

function Sidemenu({ open, variant, onClose, isDesktop, ...rest }) {
  const classes = useStyles();

  return (
    <Drawer
      className={clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      anchor="left"
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      onClose={onClose}
      open={open}
      variant={variant}
      {...rest}
    >
      <SidemenuOptions
        options={routes}
        open={open}
        isDesktop={isDesktop}
        handleClose={onClose}
      />
    </Drawer>
  );
}

Sidemenu.defaultProps = {
  onClose: undefined,
  isDesktop: true,
};

Sidemenu.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
  isDesktop: PropTypes.bool,
};

export default Sidemenu;
