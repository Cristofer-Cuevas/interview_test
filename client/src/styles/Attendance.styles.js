import styled from "styled-components";

const AttendanceDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: ; */

  .attendanceTitle {
    font-size: 2rem;
  }

  .inputAndActions {
    display: flex;
    width: 25rem;
    justify-content: space-around;
    align-items: center;
    margin: 3rem 0;
  }

  .attendanceInput {
    padding-left: 2rem;
    height: 3.5rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    background-color: rgb(245, 245, 245);
  }

  .action {
    /* display: inline-block; */
    width: 2rem;
    cursor: pointer;
    margin-left: 0.5rem;
  }

  .attendanceTable {
    text-align: center;
    width: 25rem;
  }
`;

export default AttendanceDiv;
