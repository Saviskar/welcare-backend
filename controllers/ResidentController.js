const con = require("../config/dbconnection");

module.exports = {
  getResidents: (req, res) => {
    const sql = "SELECT * FROM residents";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
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
};
