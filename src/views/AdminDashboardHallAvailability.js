import CalendarCom from "../components/calendar";
import AdminDashboardSidebar from "../components/admin_dashboard_sidebar";

function StudentDashboardHallAvailability(props) {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminDashboardSidebar data={props.data} />
            <CalendarCom />
        </div>
    );
}

export default StudentDashboardHallAvailability;