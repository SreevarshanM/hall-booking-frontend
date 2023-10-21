import StudentDashboardSidebar from "../components/student_dashboard_sidebar";

function StudentDashboardHallAvailability(props) {
    return (
        <div class="flex flex-col md:flex-row">
            <StudentDashboardSidebar data={props.data} />
        </div>
    );
}

export default StudentDashboardHallAvailability;