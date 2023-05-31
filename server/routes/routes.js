import express from "express";
import controllers from "../controllers/controllers.js";
const routes = express.Router();

const {
  postStudent,
  getUsers,
  getAttendance,
  postAttendance,
  getRecords,
  postRecord,
  deleteAttendance,
  deleteRecord,
} = controllers;

routes.get("/users", getUsers);

routes.get("/attendance/:date", getAttendance);

routes.get("/records/:date/:studentid", getRecords);

routes.post("/add-student", postStudent);

routes.post("/add-attendance", postAttendance);

routes.post("/add-record", postRecord);

routes.delete("/delete-attendance", deleteAttendance);

routes.delete("/delete-record", deleteRecord);

export default routes;
