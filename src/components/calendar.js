import FullCalendar from "@fullcalendar/react";
import "@fullcalendar/daygrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect, useState } from "react";
import axios from "axios";

function CalendarCom() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://au-hallbooking-backend.onrender.com/api/booking/allBookings"
      )
      .then((response) => {
        const extractedEvents = response.data.map((booking) => ({
          start: booking.Time_From, // Replace with the actual property names in your API response
          end: booking.Time_To,
          color: getEventColor(booking.Status),
          title: booking.Hall_Name,
        }));

        setEvents(extractedEvents);
      })
      .catch((error) => {
        console.error("Error fetching booking data:", error);
      });
  }, []);

  const getEventColor = (status) => {
    switch (status) {
      case "approved":
        return "green";
      case "pending":
        return "orange";
      // Add more cases for other statuses if needed
      default:
        return "blue"; // Default color for unknown statuses
    }
  };
  return (
    <div className="w-full p-2 md:p-8 bg-zinc-100">
      <div className="bg-white p-5">
        <FullCalendar
          defaultView="dayGridMonth"
          themeSystem="standard"
          plugins={[dayGridPlugin]}
          events={events}
          displayEventEnd="true"
          eventMinHeight={30}
          eventDisplay="block"
          eventColor={"#434343"}
          dayMaxEventRows={2}
          moreLinkClick="popover"
        />
      </div>
    </div>
  );
}

export default CalendarCom;
