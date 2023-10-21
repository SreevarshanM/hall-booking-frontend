import StudentPendingRequests from "../components/student_dashboard_pending_requests";
import StudentDashboardSidebar from "../components/student_dashboard_sidebar";

function StudentDashboardPendingRequests(props) {
    return (
        <div class="flex flex-col md:flex-row">
            <StudentDashboardSidebar data={props.data} />
            <StudentPendingRequests />
        </div>
    );
}

export default StudentDashboardPendingRequests;