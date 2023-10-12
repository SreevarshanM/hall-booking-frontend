import StudentDashboardSidebar from "../components/student_dashboard_sidebar";
import StudentDashboardMain from "../components/student_dashboard_main";

function StudentDashboardMainPage() {
    return (
        <div class="flex flex-col md:flex-row">
            <StudentDashboardSidebar />
            <StudentDashboardMain />
        </div>
    );
}

export default StudentDashboardMainPage;