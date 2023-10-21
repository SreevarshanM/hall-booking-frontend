import dashboard_icon_grey from "../assests/dashboard_icon_grey.png";
import dashboard_icon_white from "../assests/dashboard_icon_white.png";
import hall_icon_grey from "../assests/hall_icon_grey.png";
import hall_icon_white from "../assests/hall_icon_white.png";
import calendar_icon_grey from "../assests/calendar_icon_grey.png";
import calendar_icon_white from "../assests/calendar_icon_white.png";
import message_icon_grey from "../assests/message_icon_grey.png";
import message_icon_white from "../assests/message_icon_white.png";
import logout_icon_grey from "../assests/logout_icon_grey.png";
import profile from "../assests/email_id_input.png";

function StudentDashboardSidebar(props) {
    const styles = {
        backgroundColor: 'rgb(14, 165, 233)',
        color: "rgb(255, 255, 255)"
    }

    return (
        <div className="p-2 bg-white w-full flex justify-end md:w-96 md:flex md:flex-col md:justify-between" id="sideNav">
            <div className="md:hidden flex items-center">
                <button id="menuBtn" className="bg-neutral-100 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-neutral-300">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <nav className="hidden md:block">
                <div className="flex justify-start items-center mt-2 mb-6 p-2">
                    <div className="bg-gray-300 h-14 w-14 mr-3 rounded-full flex justify-center items-center">
                        <img src={profile} className="h-10 w-10" alt="profile-icon"></img>
                    </div>
                    <div className="font-bold text-xl">
                        SREE VARSHAN
                    </div>
                </div>
                <a className="block text-gray-500 py-2.5 px-4 my-2 rounded" style={props.data === "dashboard" ? styles : {}} href="/student/dashboard">
                    <div className="flex items-center">
                        <img src={props.data === "dashboard" ? dashboard_icon_white : dashboard_icon_grey} className="h-5 w-5 mr-2" alt="dashboard-icon"></img>
                        <div className="text-grey">Dashboard</div>
                    </div>
                </a>
                <a className="block text-gray-500 py-2.5 px-4 my-2 rounded" style={props.data === "hall_availability" ? styles : {}} href="/student/dashboard/hall_availability">
                    <div className="flex items-center">
                        <img src={props.data === "hall_availability" ? hall_icon_white : hall_icon_grey} className="h-5 w-5 mr-2" alt="hall-icon"></img>
                        <div className="text-grey">Hall Availability</div>
                    </div>
                </a>
                <a className="block text-gray-500 py-2.5 px-4 my-2 rounded" style={props.data === "hall_booking" ? styles : {}} href="/student/dashboard/hall_booking">
                    <div className="flex items-center">
                        <img src={props.data === "hall_booking" ? calendar_icon_white : calendar_icon_grey} className="h-5 w-5 mr-2" alt="calendar-icon"></img>
                        <div className="text-grey">Hall Booking</div>
                    </div>
                </a>
                <a className="block text-gray-500 py-2.5 px-4 my-2 rounded" style={props.data === "pending_requests" ? styles : {}} href="/student/dashboard/pending_requests">
                    <div className="flex items-center">
                        <img src={props.data === "pending_requests" ? message_icon_white : message_icon_grey} className="h-5 w-5 mr-2" alt="message-icon"></img>
                        <div className="text-grey">Booking Status</div>
                    </div>
                </a>
            </nav>

            <button className="text-gray-500 w-full py-2.5 px-4 my-2 rounded hidden md:flex">
                <div className="flex items-center">
                    <img src={logout_icon_grey} className="h-5 w-5 mr-2" alt="logout-icon"></img>
                    <div className="text-grey">Logout</div>
                </div>
            </button>
        </div>
    );
}

export default StudentDashboardSidebar;