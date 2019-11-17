import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './styles';

function Topbar({ onMenuButtonClick }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSettingClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenuSettings = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          id="topbar-icon-button-menu"
          onClick={onMenuButtonClick}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.navbarTitle}>
          <img alt="Logo" src="" />
        </div>
        <div className={classes.flexGrow} />
        <IconButton
          id="topbar-icon-button-settings"
          onClick={handleSettingClick}
        >
          <SettingsIcon />
        </IconButton>
        <Menu
          id="top-bar-settings-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenuSettings}
        >
          <MenuItem
            id="option-settings-menu-1"
            onClick={handleCloseMenuSettings}
          >
            Options 1
          </MenuItem>
          <MenuItem
            id="option-settings-menu-1"
            onClick={handleCloseMenuSettings}
          >
            Options 2
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

Topbar.propTypes = {
  onMenuButtonClick: PropTypes.func.isRequired,
};

export default Topbar;
