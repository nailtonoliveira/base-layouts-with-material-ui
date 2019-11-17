import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  flexGrow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 12,
  },
  navbarTitle: {
    width: 260,
  },
  hide: {
    display: 'none',
  },
  moreMenuOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
}));

export default useStyles;
