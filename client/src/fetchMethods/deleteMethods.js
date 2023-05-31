export const deleteRecord = ({ recordId }) => {
  return fetch("http://localhost:3001/delete-record", {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      recordId,
    }),
  }).then((res) => {
    return res.json();
  });
};

export const deleteAttendance = ({ attendanceId }) => {
  return fetch("http://localhost:3001/delete-attendance", {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      attendanceId,
    }),
  }).then((res) => {
    return res.json();
  });
};
