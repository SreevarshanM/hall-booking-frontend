import StudentDashboardSidebar from "../components/student_dashboard_sidebar";
import StudentDashboardMain from "../components/student_dashboard_main";

function StudentDashboardMainPage(props) {
  return (
    <div className="flex flex-col md:flex-row">
      <StudentDashboardSidebar
        data={props.data}
        changeRefreshState={props.changeRefreshState}
      />
      <StudentDashboardMain />
    </div>
  );
}

export default StudentDashboardMainPage;
