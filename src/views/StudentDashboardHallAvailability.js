import CalendarCom from "../components/calendar";
import StudentDashboardSidebar from "../components/student_dashboard_sidebar";

function StudentDashboardHallAvailability(props) {
  return (
    <div className="flex flex-col md:flex-row">
      <StudentDashboardSidebar
        data={props.data}
        changeRefreshState={props.changeRefreshState}
      />
      <CalendarCom />
    </div>
  );
}

export default StudentDashboardHallAvailability;
