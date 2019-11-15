import { fade, lighten } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';

export default {
  MuiAppBar: {
    root: {
      boxShadow: '0px 1px 2px #00000029',
    },
    colorPrimary: {
      backgroundColor: palette.white,
      color: palette.dark,
    },
  },
  MuiIcon: {
    root: {
      fontSize: 16,
    },
    fontSizeSmall: {
      fontSize: 12,
    },
    fontSizeLarge: {
      fontSize: 20,
    },
  },
  MuiButton: {
    contained: {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.50)',
    },
    containedSecondary: {
      color: palette.black,
      backgroundColor: palette.white,
      '&:hover': {
        backgroundColor: '#eeeeee',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.white,
        },
      },
    },
  },
  MuiIconButton: {
    colorSecondary: {
      color: palette.white,
      '&:hover': {
        backgroundColor: fade(palette.white, 0.08),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  MuiDialog: {
    scrollPaper: {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'center',
    },
  },
  MuiTypography: {},
  MuiCard: {
    root: {
      boxShadow: '0px 1px 2px #00000029',
    },
  },
  MuiTextField: {
    variant: 'outlined',
  },
  MuiTableCell: {
    root: {
      paddingTop: 12,
      paddingRight: 8,
      paddingBottom: 12,
      paddingLeft: 8,
      borderBottom: '1px solid ' + lighten(fade(palette.black, 1), 0.88),
    },
    stickyHeader: {
      backgroundColor: palette.white,
    },
  },
  MuiCardContent: {
    root: {
      '&:last-child': {
        paddingBottom: 16,
      },
    },
  },
  MuiTab: {
    root: {
      minWidth: 48,
    },
  },
  MuiTooltip: {
    tooltip: {
      fontSize: typography.fontSize,
      textAlign: 'justify',
    },
  },
};
