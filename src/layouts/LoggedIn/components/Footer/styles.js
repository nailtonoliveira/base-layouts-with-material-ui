import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
  },
}));

export default useStyles;
