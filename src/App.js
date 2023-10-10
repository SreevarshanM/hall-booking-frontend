import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageCenterContent from './components/HomePageCenterContent';
import LoginCenterContent from './components/LoginCenterContent';
import RegisterCenterContent from './components/RegisterCenterContent';

function App() {
  return (
    <div>
      <Header />
      <HomePageCenterContent />
      <Footer />
    </div >
  );
}

export default App;
