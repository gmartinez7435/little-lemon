import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import BackToTop from './components/BackToTop';


function App() {
  return (
   <>
    <Nav />
    <Main />
    {/* <Menu />
    <Footer /> */}
    <BackToTop />
   </>
  );
}

export default App;
