import styled from "styled-components";
import searchIcon from "./assets/search_black_24dp.svg";

const LeftSide = styled.section`
  .imgMenu {
    cursor: pointer;
    width: 2rem;
  }

  .menuAndSearch {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    height: 7rem;
    margin-top: 0;
    padding: 0 1rem;
  }

  .menuBtns {
    display: none;
    position: absolute;
    top: 5rem;
    border: 1px solid black;
    backdrop-filter: blur(5px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 15rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 30px;
    border-radius: 16px;

    a {
      display: block;
      cursor: pointer;
      margin: 0.5rem 0rem;
    }
  }

  .showMenuBtns {
    display: flex;
  }

  .inputSearch {
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 1rem center;

    padding-left: 3rem;
    height: 3.5rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    background-color: rgb(245, 245, 245);
  }

  .title {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }

  .studentsList {
    padding-left: 3.5rem;
  }
  .studentListItem {
    padding-left: 0.5rem;
    margin-top: 0.8rem;
  }

  .addStudentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */
    height: 15rem;
  }

  .nameInput,
  .lastNameInput {
    display: block;

    margin: 1rem 0rem;
    width: 17rem;
    padding-left: 1rem;
    height: 3.5rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    background-color: rgb(245, 245, 245);
  }
`;
export default LeftSide;
