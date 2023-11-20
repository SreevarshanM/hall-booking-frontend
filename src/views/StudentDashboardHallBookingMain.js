import StudentDashboardSidebar from "../components/student_dashboard_sidebar";
import StudentDashboardHallBooking from "../components/student_dashboard_hall_booking";

function StudentDashboardHallBookingMainPage(props) {
  return (
    <div className="flex flex-col md:flex-row">
      <StudentDashboardSidebar
        data={props.data}
        changeRefreshState={props.changeRefreshState}
      />
      <StudentDashboardHallBooking />
    </div>
  );
}

export default StudentDashboardHallBookingMainPage;
