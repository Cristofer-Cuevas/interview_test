import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getAttendance } from "../fetchMethods/getMethods";
import letterA from "../styles/assets/letter-a.png";
import letterE from "../styles/assets/letter-e.png";
import letterP from "../styles/assets/letter-p.png";
import trashBin from "../styles/assets/trash-bin.png";
import AttendanceDiv from "../styles/Attendance.styles";
import { postAttendance, deleteAttendance } from "../fetchMethods/postMethods";

const Attendance = ({ studentsList, date }) => {
  const [attendanceDate, setAttendanceDate] = useState(date);

  const inputRef = useRef();
  const { data, refetch: refetchAttendance } = useQuery(
    ["attendance", attendanceDate],
    () => getAttendance(attendanceDate).then((res) => res.json()),
    {
      staleTime: Infinity,
    }
  );

  const { mutate } = useMutation(["newAttendance"], postAttendance, {
    onSuccess: () => {
      refetchAttendance();
    },
  });

  const { mutate: mutateAttendance } = useMutation(
    ["deleteAttendance"],
    deleteAttendance,
    {
      onSuccess: () => {
        refetchAttendance();
      },
    }
  );

  const getIndex = (index, action) => {
    const student = studentsList?.filter(
      (student, index) => index == inputRef.current.value - 1
    );

    mutate({
      studentId: student[0].id,
      attendanceStatus: action,
      date: attendanceDate,
    });
  };

  const handleDateSelect = (e) => {
    setAttendanceDate(e.target.value);
  };

  const handleDeleteAttendanceClick = (e) => {
    mutateAttendance({ attendanceId: e.target.dataset.attendance_id });
  };

  return (
    <AttendanceDiv>
      <h2 className="attendanceTitle">Attendance</h2>
      <form>
        <select onChange={handleDateSelect}>
          {data?.dates?.map((attendance) => {
            return attendance.attendance_date ? (
              <option
                key={attendance.attendance_id}
                value={attendance.attendance_date}
              >
                {attendance.attendance_date}
              </option>
            ) : (
              <></>
            );
          })}
        </select>
      </form>

      <div className="inputAndActions">
        <input
          className="attendanceInput"
          type="number"
          ref={inputRef}
          placeholder="Select Student"
        />
        <Actions index={1} getIndex={getIndex} />
      </div>

      <table className="attendanceTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.attendance?.map((attendance) => {
            return (
              <tr key={attendance.attendance_id}>
                <td>
                  {attendance.name} {attendance.lastname}
                </td>
                <td>{attendance.attendance}</td>
                <td>
                  <img
                    className="action"
                    data-attendance_id={attendance.attendance_id}
                    src={trashBin}
                    onClick={handleDeleteAttendanceClick}
                    alt="delete"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </AttendanceDiv>
  );
};

Attendance.propTypes = {
  studentsList: PropTypes.array,
  date: PropTypes.string,
};

const Actions = ({ index, getIndex }) => {
  const bttnRef = useRef(null);

  const handleDeleteBtnClick = (e) => {
    getIndex(e.target.dataset.index, e.target.dataset.action);
  };
  return (
    <div>
      <img
        className="letterP action"
        onClick={handleDeleteBtnClick}
        data-index={index}
        data-action="P"
        alt="check-icon"
        src={letterP}
      />
      <img
        ref={bttnRef}
        className="letterA action"
        onClick={handleDeleteBtnClick}
        data-index={index}
        data-action="A"
        alt="trash-icon"
        src={letterA}
      />

      <img
        className="letterE action"
        onClick={handleDeleteBtnClick}
        data-index={index}
        data-action="E"
        alt="check-icon"
        src={letterE}
      />
    </div>
  );
};

Actions.propTypes = {
  index: PropTypes.number,
  getIndex: PropTypes.func,
};

export default Attendance;
