import AdminDashboardMain from "../components/admin_dashboard_main";
import AdminDashboardSidebar from "../components/admin_dashboard_sidebar";

function AdminDashboardMainPage(props) {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminDashboardSidebar 
                data={props.data}
                changeRefreshState={props.changeRefreshState} />
            <AdminDashboardMain />
        </div>
    );
}

export default AdminDashboardMainPage;