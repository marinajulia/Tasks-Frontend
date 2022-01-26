import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RouteTask from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteTask />
    </BrowserRouter>
  );
}

export default App;
