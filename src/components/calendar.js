import FullCalendar from "@fullcalendar/react";
import "@fullcalendar/daygrid";
import dayGridPlugin from "@fullcalendar/daygrid";

import events from "./events";

function CalendarCom() {
    const alerter = () => {
        window.alert("helolo");
    }

    const eventBox = () => {
        return (
            <div>
                Varunkumar
            </div>
        );
    }

    return (
        <div className="w-full p-8 bg-zinc-100">
            <div className="bg-white p-5">
                <FullCalendar
                    defaultView="dayGridMonth"
                    themeSystem="Simplex"
                    plugins={[dayGridPlugin]}
                    events={events}
                    displayEventEnd="true"
                    eventMinHeight={30}
                    eventColor={"#272727"}
                />
            </div>
        </div>
    );
}

export default CalendarCom;