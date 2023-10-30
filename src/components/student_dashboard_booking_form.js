import Datepicker from "tailwind-datepicker-react";
import { useEffect,useState } from "react";

function StudentDashboardHallBookingBookingForm() {

    //AVAILABLE SLOTS
    const [availableTimes, setAvailableTimes] = useState([]);
    const [Time_From, setTimeFrom] = useState('');
    const [Time_To, setTimeTo] = useState('');

    useEffect(() => {
        console.log("Fetching available time slots...");
        fetch('http://localhost:8800/api/booking/availableslots')
        .then((response) => response.json())
        .then((data) => {
            const availableTimeSlots = data.availableTimeSlots.map((timeStr) => new Date(timeStr));
            setAvailableTimes(availableTimeSlots);
        });
    }, []);

    const handleTimeFromChange = (event) => {
        setTimeFrom(event.target.value);
    };

    const handleTimeToChange = (event) => {
        setTimeTo(event.target.value);
    };
    //


    const options = {
        title: "Demo Title",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
        minDate: new Date("1950-01-01"),
        theme: {
            background: "bg-gray-700 dark:bg-gray-800",
            todayBtn: "",
            clearBtn: "",
            icons: "",
            text: "",
            disabledText: "bg-red-500",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>Previous</span>,
            next: () => <span>Next</span>,
        },
        datepickerclassNames: "top-12",
        defaultDate: new Date("2022-01-01"),
        language: "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

    const DemoComponent = () => {
        const [show, setShow] = useState(false);
        const handleChange = (selectedDate) => {
            console.log(selectedDate)
        }
        const handleClose = (state) => {
            setShow(state)
        }

        return (
            <div>
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
            </div>
        )
    }

    return (
        <div className="sm:p-14 p-3 bg-zinc-100">
            <div className="text-sm sm:text-lg">Fill the following details and click submit to book the hall</div>

            <form className="py-10 sm:pr-20">
                <table className="table-auto w-full">
                    <tbody>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">DEPARTMENT
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td>
                                <select id="email" className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option>Department of Mathematics</option>
                                    <option>Department of Computer Science</option>
                                    <option>Department of Information Science and Technology</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">HALL FOR BOOKING
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td>
                                <select id="email" className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option>Lecture Hall No. 78</option>
                                    <option>Lecture Hall No. 201</option>
                                    <option>Vivekanandha Auditorium</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">AFFILIATED DEPARTMENT/ CLUB
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td>
                                <select id="email" className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option>CSAU Club</option>
                                    <option>Department of Computer Science</option>
                                    <option>Department of Information Science and Technology</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">DATE
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td>
                                <DemoComponent />
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">TIME FROM
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td>
                                <select id="TimeFrom" value={Time_From} onChange={handleTimeFromChange} className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option value="">Select a time</option>
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            { time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit'}) }
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">TIME TO
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td>
                                <select id="TimeTo" value={Time_To} onChange={handleTimeToChange} className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" required>
                                    <option value="">Select a time</option>
                                    {availableTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            { time.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit'}) }
                                        </option>
                                    ))}  
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-1/6 sm:w-1/3 p-4 align-top">
                                <label className="text-sm sm:text-lg font-bold text-gray-900 flex justify-between">REASON
                                    <label className="mx-3 font-bold">:</label>
                                </label>
                            </td>
                            <td className="pt-4">
                                <input className="bg-[#f8fafa] h-24 border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5" />
                            </td>
                        </tr>
                    </tbody>
                </table>


                <button type="submit" className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-5 rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">Book Hall</button>
            </form>

        </div>
    );
}

export default StudentDashboardHallBookingBookingForm;