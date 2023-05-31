import { useRef } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@tanstack/react-query";

import { postStudent } from "../fetchMethods/postMethods";
import { Link } from "react-router-dom";

const StudentsList = ({
  inputValue,
  showAddStudent,
  refetch,
  studentsList,
}) => {
  const students = studentsList?.filter((student) =>
    student.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  console.log(students);

  return (
    <section>
      <h1 className="title">Students List</h1>
      {showAddStudent ? (
        <AddStudent refetchStudents={refetch} />
      ) : (
        <ol className="studentsList">
          {students?.map((student) => {
            return (
              <Link
                to={`${student.id}/${student.name} ${student.lastname}`}
                key={student.id}
              >
                <li
                  className="studentListItem"
                  key={student.id}
                >{`${student.name} ${student.lastname}`}</li>
              </Link>
            );
          })}
        </ol>
      )}
    </section>
  );
};

StudentsList.propTypes = {
  studentsList: PropTypes.array,
  showAddStudent: PropTypes.bool,
  inputValue: PropTypes.string,
  refetch: PropTypes.func,
};

const AddStudent = ({ refetchStudents }) => {
  const studentNameRef = useRef(0);
  const studentLastNameRef = useRef(0);
  const { mutate } = useMutation(["post-students"], postStudent, {
    onSuccess: () => {
      refetchStudents();
    },
  });

  const handleAddStudent = () => {
    const studentData = {
      name: studentNameRef.current.value,
      lastName: studentLastNameRef.current.value,
    };

    mutate(studentData);
    studentNameRef.current.value = "";
    studentLastNameRef.current.value = "";
  };

  return (
    <div className="addStudentContainer">
      <input
        className="nameInput"
        type="text"
        placeholder="Name"
        ref={studentNameRef}
      />
      <input
        className="lastNameInput"
        type="text"
        placeholder="Last Name"
        ref={studentLastNameRef}
      />
      <button className="addStudentBtn" onClick={handleAddStudent}>
        Add Student
      </button>
    </div>
  );
};

AddStudent.propTypes = {
  refetchStudents: PropTypes.func,
};

export default StudentsList;
