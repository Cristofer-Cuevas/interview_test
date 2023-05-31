import { useState } from "react";
import StudentsLIst from "./StudentsList";
import SearchBox from "./SearchBox";
import threeDotsMenu from "../styles/assets/three_dots_menu.svg";
import LeftSide from "../styles/LeftSide.styles";
import Attendance from "./Attendance";
import Records from "./Records";
import { getStudents } from "../fetchMethods/getMethods";
import { useQuery } from "@tanstack/react-query";
import { Link, Routes, Route } from "react-router-dom";
import HomeSection from "../styles/HomeSection.styles";

const Home = () => {
  const dateObj = new Date();
  const month = dateObj.getMonth() + 1; //months from 1-12
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const date = `${year}-${month}-${day}`;

  const { data, refetch } = useQuery(
    ["users"],
    () => getStudents().then((res) => res.json()),
    {
      staleTime: Infinity,
    }
  );

  const studentsList = data?.students;

  const [showAddStudent, setShowAddStudent] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleAddStudentCilck = (e) => {
    if (showAddStudent) {
      setShowAddStudent(false);
      e.target.textContent = "Add Student";
    } else {
      setShowAddStudent(true);
      e.target.textContent = "Students List";
    }
  };

  const getInputValue = (value) => {
    setInputValue(value);
  };

  const handleOnMenuClick = (e) => {
    e.target.nextElementSibling.classList.toggle("showMenuBtns");
  };

  return (
    <HomeSection>
      <LeftSide className="leftSide">
        <div className="menuAndSearch">
          <SearchBox
            getInputValue={getInputValue}
            searchType={"Search for Students"}
          />
          <img
            className="imgMenu"
            src={threeDotsMenu}
            alt="menu"
            onClick={handleOnMenuClick}
          />
          <nav className="menuBtns">
            <Link to={"/attendance"}>Attendance</Link>

            <a onClick={handleAddStudentCilck}>Add Student</a>
          </nav>
        </div>

        <StudentsLIst
          inputValue={inputValue}
          showAddStudent={showAddStudent}
          refetch={refetch}
          studentsList={studentsList}
        />
      </LeftSide>

      <section>
        <Routes>
          <Route
            path="/attendance"
            element={<Attendance studentsList={studentsList} date={date} />}
          />
          <Route
            path="/:studentid/:studentname"
            element={<Records date={date} />}
          />
        </Routes>
      </section>
    </HomeSection>
  );
};

export default Home;
