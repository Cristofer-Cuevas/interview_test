export const deleteRecord = ({ recordId }) => {
  console.log(recordId);

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
