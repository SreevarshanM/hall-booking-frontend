import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageCenterContent from './components/HomePageCenterContent';
import LoginCenterContent from './components/LoginCenterContent';
import RegisterCenterContent from './components/RegisterCenterContent';
import StudentDashboardMainPage from './views/StudentDashboardMainPage';
import StudentDashboardHallBookingMainPage from './views/StudentDashboardHallBookingMain';
import StudentDashboardPendingRequests from './views/StudentDashboardPendingRequests';
import StudentDashboardHallAvailability from './views/StudentDashboardHallAvailability';

function App() {
  return (
    <div>
      <Header data={{ flag: window.location.pathname === "/" ? true : false }} />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePageCenterContent />} />
          <Route path="login" element={<LoginCenterContent />} />
          <Route path="register" element={<RegisterCenterContent />} />
          <Route path="student/dashboard" element={<StudentDashboardMainPage data={"dashboard"} />} />
          <Route path="student/dashboard/hall_booking" element={<StudentDashboardHallBookingMainPage data={"hall_booking"} />} />
          <Route path="student/dashboard/pending_requests" element={<StudentDashboardPendingRequests data={"pending_requests"} />} />
          <Route path="student/dashboard/hall_availability" element={<StudentDashboardHallAvailability data={"hall_availability"} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
