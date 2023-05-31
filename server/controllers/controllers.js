import pool from "../DBConnection/DBConnection.js";

const controllers = {};

const getStudents = async () => {
  const { rows } = await pool.query(
    "SELECT  id, name, lastname FROM students ORDER BY name"
  );
  return rows;
};

controllers.postStudent = async (req, res) => {
  try {
    const { name, lastName } = req.body;
    if (name && lastName) {
      const { rows } = await pool.query(
        "INSERT INTO students VALUES(default, $1, $2) RETURNING *",
        [name.trim(), lastName.trim()]
      );

      if (rows) {
        res.json({ success: true });
      } else res.json({ success: false });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

controllers.getUsers = async (req, res) => {
  try {
    const rows = await getStudents();

    res.json({ students: rows });
  } catch (err) {
    console.log(err);
  }
};

controllers.getAttendance = async (req, res) => {
  try {
    const { date } = req.params;

    if (date) {
      const { rows } = await pool.query(
        "SELECT id, name, lastname, attendance, attendance_id, TO_CHAR(attendance_date, 'YYYY-MM-DD') as attendance_date FROM attendance FULL OUTER JOIN students ON attendance.student_id = students.id WHERE attendance.attendance_date = $1 ORDER BY name",
        [date]
      );

      const { rows: dates } = await pool.query(
        "SELECT DISTINCT ON (attendance_date) TO_CHAR(attendance_date, 'YYYY-MM-DD') AS attendance_date, attendance_id from attendance ORDER BY attendance_date DESC"
      );

      res.json({ attendance: rows, dates });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.log(err);
  }
};

controllers.postAttendance = async (req, res) => {
  try {
    const { studentId, attendance, date } = req.body;
    if (studentId && attendance && date) {
      const { rows } = await pool.query(
        "INSERT INTO attendance VALUES(default, $1, $2, $3) RETURNING student_id",
        [attendance, studentId, date]
      );

      if (rows[0]) {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

controllers.getRecords = async (req, res) => {
  try {
    const { date, studentid } = req.params;

    if ((date, studentid)) {
      const { rows } = await pool.query(
        "SELECT * FROM records WHERE student_id = $1 AND record_date = $2",
        [studentid, date]
      );

      const { rows: recordsDate } = await pool.query(
        "SELECT DISTINCT ON (record_date) TO_CHAR(record_date, 'YYYY-MM-DD') AS record_date, record_id from records WHERE student_id = $1 ORDER BY record_date DESC",
        [studentid]
      );

      res.json({ records: rows, recordsDate });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.log(err);
  }
};

controllers.postRecord = async (req, res) => {
  const { studentId, record, subject, date } = req.body;

  try {
    if ((studentId, record, subject, date)) {
      let literal;

      if (record >= 90) {
        literal = "A";
      } else if (record >= 80) {
        literal = "B";
      } else if (record >= 70) {
        literal = "C";
      } else {
        literal = "F";
      }

      const { rows } = await pool.query(
        "INSERT INTO records VALUES(default, $1, $2, $3, $4) RETURNING *",
        [subject, literal, date, studentId]
      );

      if (rows[0]) {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
  }
};

controllers.deleteAttendance = async (req, res) => {
  try {
    const { attendanceId } = req.body;

    console.log(attendanceId);

    const { rows } = await pool.query(
      "DELETE FROM attendance * WHERE attendance_id = $1 RETURNING *",
      [attendanceId]
    );
    if (rows[0]) {
      res.json({ success: true });
    }
  } catch (error) {
    console.log(error);
  }
};

controllers.deleteRecord = async (req, res) => {
  try {
    const { recordId } = req.body;

    const { rows } = await pool.query(
      "DELETE FROM records * WHERE record_id = $1 RETURNING record_id",
      [recordId]
    );

    if (rows[0]) {
      res.json({ sucess: true });
    }
  } catch (error) {
    console.log(error);
  }
};

export default controllers;
