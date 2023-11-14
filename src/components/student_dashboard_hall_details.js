import { useNavigate } from "react-router-dom";
import StudentHallBookingBookingForm from "./student_dashboard_booking_form";
import { useState } from "react";
function StudentHallBookingDetailsPage({ selectedHall }) {
  const navigate = useNavigate();
  const [booking, setBooking] = useState(false);
  return (
    <>
      {booking ? (
        <StudentHallBookingBookingForm selectedHall={selectedHall} />
      ) : (
        <div className="p-10 bg-zinc-100">
          <div className="text-3xl font-semibold text-green-700 mb-5">
            {selectedHall.Hall_Name}
          </div>
          <div className="flex flex-wrap">
            <img
              src={selectedHall.Image1}
              className="w-1/2 max-h-96 pr-2"
              alt="image1"
            ></img>
            <img
              src={selectedHall.Image2}
              className="w-1/2 max-h-96 pl-2"
              alt="image2"
            ></img>
          </div>
          <div className="text-black font-bold text-2xl my-2">ABOUT :</div>
          <div className="text-justify">{selectedHall.Description}</div>
          <button
            type="button"
            className="text-white bg-sky-500 hover:bg-sky-600 w-36 h-10 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm my-5"
            onClick={(e) => {
              e.preventDefault();
              const token = localStorage.getItem("authToken");
              if (!token) navigate("/login");
              setBooking(true);
            }}
          >
            Book Hall
          </button>
        </div>
      )}
    </>
  );
}

export default StudentHallBookingDetailsPage;
