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
import AdminDashboardMainPage from './views/AdminDashboardMainPage';
import AdminDashboardPendingRequests from './views/AdminDashboardPendingRequests';
import AdminDashboardHallAvailability from "./views/AdminDashboardHallAvailability";
import CalendarCom from './components/calendar';
import HallDetailMain from "./components/student_dashboard_hall_booking";

function App() {

  const isHeader = () => {
    var pathname = window.location.pathname;
    if (pathname === "/" || pathname === "/calendar" || pathname.startsWith("/hall_details")) {
      return true;
    }
  }

  return (
    <div>
      <Header data={{ flag: isHeader() }} />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePageCenterContent />} />
          <Route path="login" element={<LoginCenterContent />} />
          <Route path="register" element={<RegisterCenterContent />} />
          <Route path="student/dashboard" element={<StudentDashboardMainPage data={"dashboard"} />} />
          <Route path="student/dashboard/hall_booking" element={<StudentDashboardHallBookingMainPage data={"hall_booking"} />} />
          <Route path="student/dashboard/pending_requests" element={<StudentDashboardPendingRequests data={"pending_requests"} />} />
          <Route path="student/dashboard/hall_availability" element={<StudentDashboardHallAvailability data={"hall_availability"} />} />
          <Route path="admin/dashboard" element={<AdminDashboardMainPage data={"dashboard"} />} />
          <Route path="admin/dashboard/pending_requests" element={<AdminDashboardPendingRequests data={"pending_requests"} />} />
          <Route path="admin/dashboard/hall_availability" element={<AdminDashboardHallAvailability data={"hall_availability"} />} />
          <Route path="/calendar" element={<CalendarCom />} />
          <Route path="/hall_details" element={<HallDetailMain />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div >
  );
}

export default App;
