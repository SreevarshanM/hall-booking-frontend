const events = [
  { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  {
    title: "Vivekanandha Auditorium",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
    color: "green"
  },
  {
    groupId: "999",
    title: "Lecture Hall No. 28",
    start: getDate("YEAR-MONTH-09T10:30:00+05:30"),
    end: getDate("YEAR-MONTH-09T12:30:00+05:30"),
  },
  {
    groupId: "999",
    title: "Drawing Hall No. 49",
    start: getDate("YEAR-MONTH-16T16:00:00+05:30"),
    end: getDate("YEAR-MONTH-16T17:00:00+05:30"),
  },
  {
    title: "Lecture Hall No. 26",
    start: getDate("YEAR-MONTH-26T11:00:00+05:30"),
    end: getDate("YEAR-MONTH-26T12:15:00+05:30"),
  },
  {
    title: "Drawing Hall : 49",
    start: getDate("YEAR-MONTH-26T10:30:00+05:30"),
    end: getDate("YEAR-MONTH-26T12:15:00+05:30"),
  },
  {
    title: "Lecture Hall No. 26",
    start: getDate("YEAR-MONTH-16T08:30:00+05:30"),
    end: getDate("YEAR-MONTH-16T10:30:00+05:30"),
  },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
