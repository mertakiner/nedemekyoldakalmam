import React from 'react';
import Header from './components/pages/Header';
import Main from './components/pages/Main';
import Footer from './components/pages/Footer';
import './App.css';

function App() {
  return (
    <div className="app container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
