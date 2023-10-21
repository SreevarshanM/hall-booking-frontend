import ceg from "../assests/ceg.jpeg";
import StudentHallBookingDetailsPage from "./student_dashboard_hall_details";
import StudentHallBookingNavbar from "./student_dashboard_navbar";
import StudentHallBookingBookingForm from "./student_dashboard_booking_form";
import { useState } from "react";

function StudentDashboardHallBookingHallList() {
    var [show, showDetails] = useState(false);
    var [showBF, showBookingForm] = useState(false);

    const hall_name = "Vivekanandha Auditorium";
    var hall_list = ["Hall Booking"];

    var [list, listAdd] = useState(hall_list);

    const loadDetailsPage = (event) => {
        showDetails(show => !show);
        hall_list.push(hall_name);
        listAdd(hall_list);
    }

    const loadBookingForm = (event) => {
        showBookingForm(showBF => !showBF);
        hall_list.push(hall_name);
        hall_list.push("Book hall");
        listAdd(hall_list);
    }

    const [data, setData] = useState("");

    const childToParent = (childData) => {
        if (childData[0].length == 2) {
            showDetails(false);
        }
        else if (childData[0].length == 3) {
            if (childData[1] == "Hall Booking") {
                showBookingForm(false);
                showDetails(false);
                childData[0].pop();
            }
            else {
                showBookingForm(false);
                showDetails(true);
            }
        }

        childData[0].pop();
        listAdd(childData[0]);
    }


    return (
        <div className="w-full">
            {
                <StudentHallBookingNavbar listAdd={list} childToParent={childToParent} />
            }
            {
                !show && !showBF && (
                    <div className="p-10 bg-zinc-100">
                        <div className="text-3xl font-semibold text-green-700 mb-5">HALL DETAILS</div>
                        <div className="flex justify-between flex-wrap">
                            <div className="flex items-center w-full mb-3 md:w-1/2">
                                <div className="whitespace-nowrap text-gray-900 font-semibold">Department  : </div>
                                <select id="Departments" class="bg-zinc-200 text-gray-500 w-full ml-3 md:mx-3 text-md rounded-lg p-1.5">
                                    <option selected>Vivek Auditorium</option>
                                    <option value="Math">Department of Mathematics</option>
                                    <option value="IT">Department of Information Science and Technology</option>
                                    <option value="CSE">Department of Computer Science</option>
                                    <option value="Mech">Department of Mechanical</option>
                                </select>
                            </div>
                            <div className=" w-full md:w-1/2">
                                <input type="text" id="first_name" class="bg-zinc-200 w-full text-gray-500 border-gray-300 text-md rounded-lg p-1.5" placeholder="Search" />
                            </div>
                        </div>

                        <div class="-mx-3 flex flex-wrap">
                            <div class="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex flex-wrap">
                                    <div class="relative w-full m-2.5 bg-white rounded-lg shadow-2xl">
                                        <div class="p-5 absolute z-10 w-full top-0 bottom-0 bg-gray-950/75 h-36 flex justify-center items-center rounded-t-lg text-center">
                                            <a>
                                                <h5 class="mb-2 text-2xl font-semibold text-white">Vivekanandha Auditorium</h5>
                                            </a>
                                        </div>
                                        <a>
                                            <img class="h-36 w-full rounded-t-lg" src={ceg} alt="" />
                                        </a>
                                        <div className="flex justify-center">
                                            <button onClick={loadDetailsPage} class="text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-black bg-zinc-300 rounded-bl-lg hover:bg-zinc-400">
                                                View details
                                            </button>
                                            <button onClick={loadBookingForm} class=" text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-white bg-sky-500 rounded-br-lg hover:bg-sky-600">
                                                Book hall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex flex-wrap">
                                    <div class="relative w-full m-2.5 bg-white rounded-lg shadow-2xl">
                                        <div class="p-5 absolute z-10 w-full top-0 bottom-0 bg-gray-950/75 h-36 flex justify-center items-center rounded-t-lg text-center">
                                            <a>
                                                <h5 class="mb-2 text-2xl font-semibold text-white">Vivekanandha Auditorium</h5>
                                            </a>
                                        </div>
                                        <a>
                                            <img class="h-36 w-full rounded-t-lg" src={ceg} alt="" />
                                        </a>
                                        <div className="flex justify-center">
                                            <button onClick={loadDetailsPage} class="text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-black bg-zinc-300 rounded-bl-lg hover:bg-zinc-400">
                                                View details
                                            </button>
                                            <button onClick={loadBookingForm} class=" text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-white bg-sky-500 rounded-br-lg hover:bg-sky-600">
                                                Book hall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div><div class="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex flex-wrap">
                                    <div class="relative w-full m-2.5 bg-white rounded-lg shadow-2xl">
                                        <div class="p-5 absolute z-10 w-full top-0 bottom-0 bg-gray-950/75 h-36 flex justify-center items-center rounded-t-lg text-center">
                                            <a>
                                                <h5 class="mb-2 text-2xl font-semibold text-white">Vivekanandha Auditorium</h5>
                                            </a>
                                        </div>
                                        <a>
                                            <img class="h-36 w-full rounded-t-lg" src={ceg} alt="" />
                                        </a>
                                        <div className="flex justify-center">
                                            <button onClick={loadDetailsPage} class="text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-black bg-zinc-300 rounded-bl-lg hover:bg-zinc-400">
                                                View details
                                            </button>
                                            <button onClick={loadBookingForm} class=" text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-white bg-sky-500 rounded-br-lg hover:bg-sky-600">
                                                Book hall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex flex-wrap">
                                    <div class="relative w-full m-2.5 bg-white rounded-lg shadow-2xl">
                                        <div class="p-5 absolute z-10 w-full top-0 bottom-0 bg-gray-950/75 h-36 flex justify-center items-center rounded-t-lg text-center">
                                            <a>
                                                <h5 class="mb-2 text-2xl font-semibold text-white">Vivekanandha Auditorium</h5>
                                            </a>
                                        </div>
                                        <a>
                                            <img class="h-36 w-full rounded-t-lg" src={ceg} alt="" />
                                        </a>
                                        <div className="flex justify-center">
                                            <button onClick={loadDetailsPage} class="text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-black bg-zinc-300 rounded-bl-lg hover:bg-zinc-400">
                                                View details
                                            </button>
                                            <button onClick={loadBookingForm} class=" text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-white bg-sky-500 rounded-br-lg hover:bg-sky-600">
                                                Book hall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex flex-wrap">
                                    <div class="relative w-full m-2.5 bg-white rounded-lg shadow-2xl">
                                        <div class="p-5 absolute z-10 w-full top-0 bottom-0 bg-gray-950/75 h-36 flex justify-center items-center rounded-t-lg text-center">
                                            <a>
                                                <h5 class="mb-2 text-2xl font-semibold text-white">Vivekanandha Auditorium</h5>
                                            </a>
                                        </div>
                                        <a>
                                            <img class="h-36 w-full rounded-t-lg" src={ceg} alt="" />
                                        </a>
                                        <div className="flex justify-center">
                                            <button onClick={loadDetailsPage} class="text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-black bg-zinc-300 rounded-bl-lg hover:bg-zinc-400">
                                                View details
                                            </button>
                                            <button onClick={loadBookingForm} class=" text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-white bg-sky-500 rounded-br-lg hover:bg-sky-600">
                                                Book hall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3">
                                <div className="flex flex-wrap">
                                    <div class="relative w-full m-2.5 bg-white rounded-lg shadow-2xl">
                                        <div class="p-5 absolute z-10 w-full top-0 bottom-0 bg-gray-950/75 h-36 flex justify-center items-center rounded-t-lg text-center">
                                            <a>
                                                <h5 class="mb-2 text-2xl font-semibold text-white">Vivekanandha Auditorium</h5>
                                            </a>
                                        </div>
                                        <a>
                                            <img class="h-36 w-full rounded-t-lg" src={ceg} alt="" />
                                        </a>
                                        <div className="flex justify-center">
                                            <button onClick={loadDetailsPage} class="text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-black bg-zinc-300 rounded-bl-lg hover:bg-zinc-400">
                                                View details
                                            </button>
                                            <button onClick={loadBookingForm} class=" text-center w-1/2 px-3 py-2 h-10 text-sm font-medium text-white bg-sky-500 rounded-br-lg hover:bg-sky-600">
                                                Book hall
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }

            {
                show && (<StudentHallBookingDetailsPage data={{ hallName: hall_name }} />)
            }
            {
                showBF && (<StudentHallBookingBookingForm />)
            }
        </div >
    );
}

export default StudentDashboardHallBookingHallList;