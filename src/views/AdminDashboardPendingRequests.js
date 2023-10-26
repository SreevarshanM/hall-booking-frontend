import AdminPendingRequests from "../components/admin_dashboard_pending_requests";
import AdminDashboardSidebar from "../components/admin_dashboard_sidebar";

function AdminDashboardPendingRequests(props) {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminDashboardSidebar data={props.data} />
            <AdminPendingRequests />
        </div>
    );
}

export default AdminDashboardPendingRequests;