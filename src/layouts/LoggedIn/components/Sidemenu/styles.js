import { makeStyles } from '@material-ui/core';

const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    backgroundColor: theme.palette.dark,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  root: {
    width: drawerWidth,
    height: '100%',
    padding: theme.spacing(2),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
