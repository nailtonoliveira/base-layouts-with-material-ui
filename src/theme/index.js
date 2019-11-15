import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import overrides from './overrides';
import typography from './typography';

export default createMuiTheme({
  palette,
  overrides,
  typography,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
