import { useRef, useState } from "react";
import PropTyes from "prop-types";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getRecords } from "../fetchMethods/getMethods";
import { postRecord } from "../fetchMethods/postMethods";
import { deleteRecord } from "../fetchMethods/deleteMethods";
import RecordDiv from "../styles/RecordDiv.styles";
import trashBin from "../styles/assets/trash-bin.png";

const Records = ({ date }) => {
  const [recordDate, setRecordDate] = useState(date);

  const studentRecordRef = useRef();
  const subjectRef = useRef();
  const { studentid, studentname } = useParams();

  const { data, refetch: refetchRecords } = useQuery(
    ["getRecords", recordDate, studentid],
    () => getRecords({ recordDate, studentid }).then((res) => res.json())
  );

  const { mutate } = useMutation(["post records"], postRecord, {
    onSuccess: () => {
      refetchRecords();
    },
  });

  const { mutate: mutateDeleteRecord } = useMutation(
    ["delete-record"],
    deleteRecord,
    {
      onSuccess: () => {
        refetchRecords();
      },
    }
  );

  const handleRecordDateSelect = (e) => {
    setRecordDate(e.target.value);
  };

  const handleSendRecordClick = () => {
    const recordInfo = {
      studentId: studentid,
      record: studentRecordRef.current.value,
      subject: subjectRef.current.value,
      date: recordDate,
    };

    mutate(recordInfo);
  };

  const handleRecordDelete = (e) => {
    mutateDeleteRecord({ recordId: e.target.dataset.record_id });
  };

  return (
    <RecordDiv>
      <h2 className="studentNameTitle">{studentname}</h2>
      <div className="formsContainer">
        <form className="dateForm">
          <select onChange={handleRecordDateSelect}>
            {data?.recordsDate?.map((recordDate) => {
              return (
                <option
                  key={recordDate.record_id}
                  value={recordDate.record_date}
                >
                  {recordDate.record_date}
                </option>
              );
            })}
          </select>
        </form>
        <input
          className="studentRecordInput"
          type="number"
          placeholder="Set Recod"
          ref={studentRecordRef}
        />
        <form className="subjectForm">
          <select ref={subjectRef}>
            <option value="Maths">Maths</option>
            <option value="History">History</option>
            <option value="Literature">Literature</option>
            <option value="Science">Science</option>
          </select>
        </form>
        <button className="sendRecordBtn" onClick={handleSendRecordClick}>
          Send Record
        </button>
      </div>
      <div></div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Record</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.records?.map((record) => {
            return (
              <tr key={record.record_id}>
                <td>{record.subject}</td>
                <td>{record.record}</td>
                <td>
                  <img
                    className="action"
                    src={trashBin}
                    alt={"delete"}
                    onClick={handleRecordDelete}
                    data-record_id={record.record_id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </RecordDiv>
  );
};

Records.propTypes = {
  date: PropTyes.string,
  studentsList: PropTyes.array,
};

export default Records;
