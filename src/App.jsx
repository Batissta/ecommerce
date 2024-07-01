import React from 'react';
import { GlobalStorage } from './GlobalContext';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalStorage>
      <Header />
      <Outlet />
      <Footer />
    </GlobalStorage>
  );
}

export default App;
