import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  flexGrow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 12,
  },
  navbarTitle: {
    display: 'flex',
    alignItems: 'center',
    width: 260,
    maxWidth: 260,
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
