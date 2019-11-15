import React from 'react';

import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';
import LoggedIn from './layouts/LoggedIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoggedIn />
    </ThemeProvider>
  );
}
