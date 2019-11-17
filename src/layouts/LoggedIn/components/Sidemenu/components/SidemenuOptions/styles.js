import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
    color: theme.palette.white,
    cursor: 'pointer',
    fontWeight: 'light',
    '&:hover': {
      color: theme.palette.red,
    },
  },
  itemCollapsed: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  subItem: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 52,
    paddingRight: 24,
    color: theme.palette.white,
    cursor: 'pointer',
    fontWeight: 'light',
    '&:hover': {
      color: theme.palette.red,
    },
  },
  text: {
    letterSpacing: '0.35px',
    fontWeight: 'inherit',
    width: '100%',
  },
  collapse: {
    backgroundColor: theme.palette.lightDark,
    borderLeft: `3px solid ${theme.palette.red}`,
  },
  icon: {
    marginRight: 12,
  },
  iconCollapsed: {
    fontSize: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  selectedItem: {
    color: theme.palette.red,
    fontWeight: 'bold',
    backgroundColor: theme.palette.lightDark,
    borderLeft: `3px solid ${theme.palette.red}`,
  },
  selectedSubitem: {
    color: theme.palette.white,
    fontWeight: 'bold',
    backgroundColor: theme.palette.lightDark,
    '&:hover': {
      color: theme.palette.white,
    },
    '&>p': {
      borderBottom: `1px solid ${theme.palette.red}`,
    },
  },
  helper: {
    maxHeight: 24,
  },
  typography: {
    paddingLeft: 25,
    paddindRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: theme.palette.white,
  },
  popper: {
    width: 220,
    zIndex: 10,
    marginLeft: -3,
    backgroundColor: theme.palette.dark,
  },
  paper: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: 'inherit',
  },
  itemPopper: {
    paddingLeft: 25,
    paddingRight: 25,
  },
}));

export default useStyles;
