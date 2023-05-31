export const postStudent = ({ name, lastName }) => {
  return fetch("http://localhost:3001/add-student", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      name,
      lastName,
    }),
  }).then((res) => {
    return res.json();
  });
};

export const postAttendance = ({ studentId, attendanceStatus, date }) => {
  return fetch("http://localhost:3001/add-attendance", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      studentId,
      attendance: attendanceStatus,
      date,
    }),
  }).then((res) => {
    return res.json();
  });
};

export const postRecord = ({ studentId, record, subject, date }) => {
  return fetch("http://localhost:3001/add-record", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      studentId,
      record,
      subject,
      date,
    }),
  }).then((res) => {
    return res.json();
  });
};
