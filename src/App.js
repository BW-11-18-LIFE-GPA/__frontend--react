import React from 'react';
import {Container} from '@material-ui/core';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <Container maxWidth='lg'>
      <Dashboard/>
    </Container>
  );
}

export default App;
