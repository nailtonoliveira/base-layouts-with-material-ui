import { makeStyles } from '@material-ui/styles';

export default makeStyles(theme => ({
  root: {
    display: 'flex',
    paddingTop: 56,
    minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));
