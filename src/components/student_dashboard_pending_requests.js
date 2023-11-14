import axios from "axios";
import { useEffect, useState } from "react";

function StudentDashboardPendingRequests(props) {

  const [bookingData, setBookingData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  //STUDENT ODA DETAILS
  const userData = JSON.parse(localStorage.getItem("authToken"));
  //

  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() - 1);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8800/api/booking/userBookings?studentid=${userData.Student_ID}`
      )
      .then((response) => {
        setBookingData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hall data:", error);
      });
  }, []);
  console.log(bookingData);
  //

  const filteredBookings =
    selectedStatus === "all"
      ? bookingData
      : bookingData.filter((booking) => booking.Status === selectedStatus);

  const getStatusClassName = (status) => {
    switch (status) {
      case "rejected":
        return "block w-full p-4 bg-[#fe3233] rounded-lg shadow-lg hover:bg-[#f0292a] hover:cursor-default";
      case "approved":
        return "block w-full p-4 bg-[#37b317] rounded-lg shadow-lg hover:bg-[#31a314] hover:cursor-default"; // cursor-pointer for clickable
      case "pending":
        return "block w-full p-4 bg-[#fea501] rounded-lg shadow-lg hover:bg-[#f09c02] hover:cursor-default";
      default:
        return "bg-white cursor-default";
    }
  };


  const handleDivClick = (status, id) => {
    if (status === "approved") {
      // Implement logic to print the approval PDF
      console.log(`Printing PDF for booking with ID: ${id}`);
    }
  };

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  }; //DATE OPTIONS
  const timeOptions = { hour: "numeric", minute: "numeric" }; //TIME OPTIONS

  return (
    <div className="bg-neutral-100 w-full">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center flex-wrap">
            <span className="self-center mr-4 text-md md:text-2xl font-bold whitespace-nowrap">
              REQUESTS :{" "}
            </span>
            <ul className="font-medium mt-2 sm:mt-0 flex flex-wrap rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#fe3233] mr-2"></div>
                <div>Rejected</div>
              </li>
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#37b317] mr-2"></div>
                <div>Approved</div>
              </li>
              <li className="flex items-center mr-2 text-sm sm:text-md">
                <div className="h-4 w-6 bg-[#fea501] mr-2"></div>
                <div>Pending</div>
              </li>
            </ul>
          </div>

          <div
            className="mt-2 lg:mt-0 w-full md:block md:w-auto"
            id="navbar-default"
          >
            <select
              id="email"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#f8fafa] border border-gray-300 text-gray-900 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
              required
            >
              <option value="all">All</option>
              <option value="approved">Approved</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </nav>

      <div className="p-4 sm:p-10 max-h-[550px] overflow-y-auto">
        <ul>
          {filteredBookings.map((booking) => (
            <li className="p-2">
              <div
                className={`${getStatusClassName(booking.Status)}`}
                onClick={() => handleDivClick(booking.status, booking._id)}
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight">
                  {booking.Hall_Name} |{" "}
                  {new Date(booking.Date).toLocaleDateString("en-US", options)}{" "}
                  |{" "}
                  {new Date(booking.Time_From).toLocaleTimeString(
                    "en-US",
                    timeOptions
                  )}{" "}
                  TO{" "}
                  {new Date(booking.Time_To).toLocaleTimeString(
                    "en-US",
                    timeOptions
                  )}{" "}
                </h5>
                <div className="flex justify-between items-end">
                  <div className="font-normal text-black text-sm">
                    <div>Affiliated Department/Club: {booking.Affiliated}</div>
                    <div>Reason : {booking.Reason}</div>
                  </div>
                  <div className="text-sm">
                    <div>Submitted On :</div>
                    <div>Timestamp to be added</div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentDashboardPendingRequests;
