import StudentDashboardSidebar from "../components/student_dashboard_sidebar";
import StudentDashboardHallBooking from "../components/student_dashboard_hall_booking";

function StudentDashboardHallBookingMainPage(props) {
    return (
        <div class="flex flex-col md:flex-row">
            <StudentDashboardSidebar data={props.data} />
            <StudentDashboardHallBooking />
        </div>
    );
}

export default StudentDashboardHallBookingMainPage;