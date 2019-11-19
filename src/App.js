import React from 'react';
import {Container} from '@material-ui/core';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <Container maxWidth='md'>
      <Dashboard/>
    </Container>
  );
}

export default App;
