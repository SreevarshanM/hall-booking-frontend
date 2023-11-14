function StudentDashboardMain() {
  return (
    <div className="p-5 md:p-10 md:pl-16 pb-20 bg-neutral-100 w-full text-base">
      <div className="text-4xl font-bold mb-5">HALLS BOOKING</div>
      <div>
        <a
          className="text-sky-500 hover:underline hover:cursor-pointer"
          href="/student/dashboard/hall_availability"
        >
          click here
        </a>{" "}
        to check the availability of halls.
        <br></br>
        Hall Bookings can be made for the following halls,
        <ol className="m-6 list-decimal ">
          <li>Drawing Hall No. 48</li>
          <li>Drawing Hall No. 49</li>
          <li>Vivekanandha Auditorium</li>
          <li>Lecture Hall No. 82</li>
          <li>Lecture Hall No. 83</li>
          <li>Lecture Hall No. 84</li>
          <li>Lecture Hall No. 13</li>
          <li>Srinivasa Ramanujan Seminar Hall</li>
        </ol>
        <div className="font-bold mb-5">Steps to book a hall : </div>
        <ul className="ml-6 list-disc">
          <li>
            Check the calendar for the availability of the halls on specific
            dates
          </li>
          <li>Click "Add new request" and fill in the form and submit</li>
          <li>
            You will receive an email upon submitting this form with regard to
            further action to be taken for confirmation
          </li>
          <li>
            Meanwhile the status of your record can be tracked from your
            Hall-Booking dashboard
          </li>
          <li>
            The Hall requests will be approved next working day before forenoon
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentDashboardMain;
