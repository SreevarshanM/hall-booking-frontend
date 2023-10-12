import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageCenterContent from './components/HomePageCenterContent';
import LoginCenterContent from './components/LoginCenterContent';
import RegisterCenterContent from './components/RegisterCenterContent';
import StudentDashboardMainPage from './views/StudentDashboardMainPage';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginCenterContent />} />
          <Route path="register" element={<RegisterCenterContent />} />
          <Route path="student" element={<StudentDashboardMainPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
