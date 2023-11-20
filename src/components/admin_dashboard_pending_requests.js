import { useEffect, useState } from "react";

function AdminPendingRequests(props) {
  const [bookingData, setBookingData] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");

  //STUDENT ODA DETAILS
  const userData = JSON.parse(localStorage.getItem("authToken"));
  //

  const bookingDate = new Date();
  bookingDate.setDate(bookingDate.getDate() - 1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://localhost:8800/api/booking/adminBookings",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      const hallData = await data.json();

      setBookingData(hallData);
    };
    fetchData();
  }, []);

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
        return "block w-full p-4 bg-[#c9c9c9] rounded-lg shadow-lg hover:bg-[#c0c0c0] hover:cursor-default";
      default:
        return "bg-white cursor-default";
    }
  };

  const [showModal, setShowModal] = useState(false);
  const handleDivClick = (status, id) => {
    if (status === "pending") {
      setShowModal(true);
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

  const [remarks,setRemarks]=useState('')
  const [approveModal,showOnApprove] = useState(false);
  const [rejectModal,showOnReject] = useState(false);
  
  const handleReject = async (bookingId,rejectRemark) => {
    try {
      const response = await fetch('http://localhost:8800/api/booking/updateBooking', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: bookingId,
          Status: "rejected",
          Remark: rejectRemark // Adjust the status as needed
        }),
      });

      if (response.ok) {
        // Handle success
        console.log('Booking rejected successfully');
        // Add any additional logic or state updates as needed
      } else {
        // Handle error
        console.error('Failed to reject booking');
      }
      showOnReject(false);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleApprove = async (bookingId,approveRemark) => {
    try {
      const response = await fetch('http://localhost:8800/api/booking/updateBooking', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: bookingId,
          Status: "approved",
          Remark: approveRemark // Adjust the status as needed
        }),
      });
      console.log(response)
      if (response.ok) {
        // Handle success
        console.log('Booking Approved successfully');
        // Add any additional logic or state updates as needed
      } else {
        // Handle error
        console.error('Failed to reject booking');
      }
      showOnApprove(false);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };



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
                <div className="h-4 w-6 bg-[#c9c9c9] mr-2"></div>
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
                onClick={() => handleDivClick(booking.Status, booking._id)}
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
                    {booking.Status !=='pending' ? <div>Remarks : {booking.Remark}</div> : null}
                  </div>
                  <div className="text-sm">
                    <div>Submitted On :</div>
                    <div>{new Date(booking.createdAt).toLocaleString()}</div>
                  </div>
                </div>

                {booking.Status==='pending' ? (<div className="flex justify-end">
                <button
                  className="bg-green-500 text-white hover:bg-green-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg mr-2"
                  onClick={() => showOnApprove(true)}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white hover:bg-red-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg"
                  onClick={() => showOnReject(true)}
                >
                  Reject
                </button>
              </div>
              ): null} 

              {approveModal ? (
        
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative w-128 h-128 mx-auto my-6">
                    <div className="bg-white border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none p-8">
                      <h2 className="text-3xl font-semibold mb-4 text-center">Approve Request</h2>
                      <div className="mb-6">
                        <p className="text-gray-700 text-center">Please provide remarks (if any) for approval::</p>
                        <textarea
                          className="w-full border rounded p-2"
                          rows="4"
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-center">
                        <button
                          className="text-red-500 hover:bg-red-50 font-semibold px-4 py-2 text-md outline-none focus:outline-none mr-2"
                          onClick={() => showOnApprove(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-sky-500 text-white hover:bg-sky-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                          onClick={() => handleApprove(booking._id,remarks)}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              ) : null}

              {approveModal ? <div className="opacity-25 fixed inset-0 bg-black"></div> : null}
              {rejectModal ? (
                
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                  <div className="relative w-128 h-128 mx-auto my-6">
                    <div className="bg-white border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none p-8">
                      {/* Header */}
                      <h2 className="text-3xl font-semibold mb-4 text-center">Reject Request</h2>

                      {/* Content */}
                      <div className="mb-6">
                        <p className="text-gray-700 text-center">Please provide reasons (if any) for rejection:</p>
                        <textarea
                          className="w-full border rounded p-2"
                          rows="4"
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                        />
                      </div>

                      {/* Footer */}
                      <div className="flex justify-center">
                        <button
                          className="text-red-500 hover:bg-red-50 font-semibold px-4 py-2 text-md outline-none focus:outline-none mr-2"
                          onClick={() => showOnReject(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-sky-500 text-white hover:bg-sky-600 font-semibold text-md px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                          onClick={() => handleReject(booking._id,remarks)}
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              ) : null}

              {rejectModal ? <div className="opacity-25 fixed inset-0 bg-black"></div> : null}
  
              </div>
            </li>
          ))
          }
        </ul>
      </div>
      
    </div>
  );
}
export default AdminPendingRequests;
