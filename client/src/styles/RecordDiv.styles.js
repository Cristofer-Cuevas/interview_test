import styled from "styled-components";

const RecordDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .studentNameTitle {
  }

  .studentRecordInput {
    border: 2px solid blue;
    border-radius: 0.3rem;
    height: 2rem;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: start;
    padding-left: 1rem;
    width: 11.5rem;
  }

  .dateForm,
  .subjectForm,
  .studentRecordInput {
    display: inline-block;
  }
  .action {
    width: 2rem;
    cursor: pointer;
  }

  .formsContainer {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5rem 5rem;
    justify-items: center;
    align-items: center;
    width: 25rem;
  }

  .dateForm {
    grid-row: 1 /2;
  }

  .subjectForm {
    select {
      width: 11.5rem;
    }
    grid-row: 2 / 3;
    grid-column: 1 /2;
    justify-self: end;
  }

  table {
    margin-top: 5rem;
    width: 25rem;
    text-align: center;
  }
`;

export default RecordDiv;
