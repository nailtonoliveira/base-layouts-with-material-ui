import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import LoggedIn from './layouts/LoggedIn';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <LoggedIn>
          <div>
            <h1>Content Page</h1>
          </div>
        </LoggedIn>
      </CssBaseline>
    </ThemeProvider>
  );
}
