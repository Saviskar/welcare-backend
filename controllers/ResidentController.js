const con = require("../config/dbconnection");

module.exports = {
  getResidents: (req, res) => {
    const sql = "SELECT * FROM residents";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },

  readResident: (req, res) => {
    const sql = `SELECT * FROM residents WHERE residentId = ?`;
    const id = req.params.id;

    con.query(sql, [id], (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results[0]);
    });
  },

  createResidents: (req, res) => {
    const sql = `
    INSERT INTO residents (
      surname, givenName, preferredNames, age,
      maritalStatus, telephone, postCode,
      religion, countryOfBirth, preferredLanguage
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    const values = [
      req.body.surname,
      req.body.givenName,
      req.body.preferredNames,
      req.body.age,
      req.body.maritalStatus,
      req.body.telephone,
      req.body.postCode,
      req.body.religion,
      req.body.countryOfBirth,
      req.body.preferredLanguage,
    ];

    con.query(sql, values, (err, results) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json(results);
    });
  },

  deleteResident: (req, res) => {
    const sql = `DELETE FROM residents WHERE residentId = ?`;
    const id = req.params.id;

    con.query(sql, [id], (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      return res.json(result);
    });
  },
};
