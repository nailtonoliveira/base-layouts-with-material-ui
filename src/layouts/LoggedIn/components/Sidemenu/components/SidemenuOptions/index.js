import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import useStyles from './styles';

function SidemenuOptions({ options, handleClose, isDesktop, open, ...rest }) {
  const classes = useStyles();

  const pathname = '/sub21';

  const [menuOpened, setMenuOpened] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openedHover, setOpenedHover] = useState(false);
  const [keepOpen, setKeepOpen] = useState(false);
  const [menu, setMenu] = useState(null);

  const routeActive = path => {
    return path === pathname;
  };

  const handleOpenSubmenu = name => {
    setMenuOpened(prev => (prev === name ? '' : name));
  };

  const handleSubitem = () => {
    if (!isDesktop) handleClose();
  };

  const handleHoverSubmenu = (event, menuHovered) => {
    if (open) return;

    if (menuHovered) {
      setAnchorEl(event.currentTarget);
      setOpenedHover(true);
      setMenu(menuHovered);
    } else {
      setOpenedHover(false);
    }
  };

  const handleKeepOpen = keep => {
    setKeepOpen(keep);
  };

  useEffect(() => {
    if (!openedHover) {
      if (!keepOpen) {
        setOpenedHover(false);
        setMenu(null);
        setAnchorEl(null);
      }
    }
  }, [openedHover]);

  useEffect(() => {
    if (!keepOpen && !openedHover) {
      setAnchorEl(null);
      setMenu(null);
    }
  }, [keepOpen]);

  const selectedInCollapse = items => {
    const res = items.find(i => i.path === pathname);
    return typeof res !== 'undefined';
  };

  useEffect(() => {
    options.forEach(item => {
      if (selectedInCollapse(item.submenu)) setMenuOpened(item.name);
    });
  }, []);

  return (
    <>
      <List {...rest} className={classes.root}>
        {options.map(option => (
          <React.Fragment key={option.title}>
            <ListItem
              className={clsx(classes.item, {
                [classes.selectedItem]: selectedInCollapse(option.submenu),
                [classes.itemCollapsed]: !open,
              })}
              onMouseEnter={event => handleHoverSubmenu(event, option)}
              onMouseLeave={event => handleHoverSubmenu(event, false)}
              onClick={() => handleOpenSubmenu(option.title)}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                className={classes.helper}
              >
                <Icon
                  className={clsx(classes.icon, {
                    [classes.iconCollapsed]: !open,
                  })}
                >
                  {option.icon}
                </Icon>
                <Fade in={open}>
                  <Grid item>
                    <Typography className={classes.text} color="inherit">
                      {option.title}
                    </Typography>
                  </Grid>
                </Fade>
              </Grid>
            </ListItem>
            <Collapse
              in={menuOpened === option.title && open}
              className={clsx({
                [classes.collapse]: selectedInCollapse(option.submenu),
              })}
              timeout="auto"
              unmountOnExit
              style={{ transitionDelay: open ? '100ms' : '0ms' }}
            >
              <Fade
                in={open}
                style={{ transitionDelay: open ? '100ms' : '0ms' }}
              >
                <List component="div" disablePadding>
                  {option.submenu.map(subitem => (
                    <ListItem
                      key={subitem.title}
                      className={clsx(classes.subItem, {
                        [classes.selectedSubitem]: routeActive(subitem.path),
                      })}
                      onClick={handleSubitem}
                    >
                      <Typography className={classes.text} color="inherit">
                        {subitem.title}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Fade>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
      <Popper
        open={(openedHover || keepOpen) && anchorEl !== null}
        anchorEl={anchorEl}
        placement="right-start"
        className={classes.popper}
        onMouseEnter={() => handleKeepOpen(true)}
        onMouseLeave={() => handleKeepOpen(false)}
      >
        <Paper className={classes.paper}>
          {menu !== null && (
            <div>
              <Typography variant="body1" className={classes.typography}>
                {menu.title}
              </Typography>
              <List component="div" disablePadding>
                {menu.submenu.map(subitem => (
                  <ListItem
                    className={clsx(classes.subItem, classes.itemPopper, {
                      [classes.selectedSubitem]: routeActive(subitem.path),
                    })}
                    onClick={handleSubitem}
                    key={subitem.title}
                  >
                    <Typography className={classes.text} color="inherit">
                      {subitem.title}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </Paper>
      </Popper>
    </>
  );
}

SidemenuOptions.defaultProps = {
  options: [],
  isDesktop: true,
};

SidemenuOptions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  isDesktop: PropTypes.bool,
};

export default SidemenuOptions;
