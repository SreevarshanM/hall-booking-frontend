import dashboard_icon_grey from "../assests/dashboard_icon_grey.png";
import dashboard_icon_white from "../assests/dashboard_icon_white.png";
import hall_icon_grey from "../assests/hall_icon_grey.png";
import hall_icon_white from "../assests/hall_icon_white.png";
import calendar_icon_grey from "../assests/calendar_icon_grey.png";
import calendar_icon_white from "../assests/calendar_icon_white.png";
import message_icon_grey from "../assests/message_icon_grey.png";
import message_icon_white from "../assests/message_icon_white.png";
import logout_icon_grey from "../assests/logout_icon_grey.png";
import logout_icon_white from "../assests/logout_icon_black.png";
import profile from "../assests/email_id_input.png";

function StudentDashboardSidebar() {
    return (
        <div class="p-2 bg-white w-full flex items-center justify-end md:w-80 md:flex md:flex-col md:justify-between" id="sideNav">
            <div class="md:hidden flex items-center">
                <button id="menuBtn" class="bg-neutral-100 p-2 rounded w-8 h-8 flex justify-center items-center hover:bg-neutral-300">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <nav class="hidden md:block">
                <div class="flex justify-start items-center mt-2 mb-6 p-2">
                    <div class="bg-gray-300 h-14 w-14 mr-3 rounded-full flex justify-center items-center">
                        <img src={profile} class="h-10 w-10"></img>
                    </div>
                    <div class="font-bold text-xl">
                        SREE VARSHAN
                    </div>
                </div>
                <a class="block text-gray-500 py-2.5 px-4 my-2 rounded bg-sky-500" href="#">
                    <div class="flex items-center">
                        <img src={dashboard_icon_white} class="h-5 w-5 mr-2"></img>
                        <div class="text-white">Dashboard</div>
                    </div>
                </a>
                <a class="block text-gray-500 py-2.5 px-4 my-2 rounded" href="#">
                    <div class="flex items-center">
                        <img src={calendar_icon_grey} class="h-5 w-5 mr-2"></img>
                        <div class="text-grey">Hall Availability</div>
                    </div>
                </a>
                <a class="block text-gray-500 py-2.5 px-4 my-2 rounded" href="#">
                    <div class="flex items-center">
                        <img src={hall_icon_grey} class="h-5 w-5 mr-2"></img>
                        <div class="text-grey">Hall Booking</div>
                    </div>
                </a>
                <a class="block text-gray-500 py-2.5 px-4 my-2 rounded" href="#">
                    <div class="flex items-center">
                        <img src={message_icon_grey} class="h-5 w-5 mr-2"></img>
                        <div class="text-grey">Booking Status</div>
                    </div>
                </a>
            </nav>

            <a class="text-gray-500 w-full py-2.5 px-4 my-2 rounded hidden md:flex" href="#">
                <div class="flex items-center">
                    <img src={logout_icon_grey} class="h-5 w-5 mr-2"></img>
                    <div class="text-grey">Logout</div>
                </div>
            </a>
        </div>
    );
}

export default StudentDashboardSidebar;