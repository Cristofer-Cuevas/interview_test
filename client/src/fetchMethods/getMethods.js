export const getStudents = () => {
  return fetch("http://localhost:3001/users");
};

export const getAttendance = async (date) => {
  return await fetch(`http://localhost:3001/attendance/${date}`);
};

export const getRecords = ({ recordDate, studentid }) => {
  return fetch(`http://localhost:3001/records/${recordDate}/${studentid}`);
};
