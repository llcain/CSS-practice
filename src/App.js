
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';



function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Main />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
