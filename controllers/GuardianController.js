const con = require("../config/dbconnection");

module.exports = {
  getGuardians: (req, res) => {
    const sql = "SELECT * FROM guardians";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },

  createGuardians: (req, res) => {
    const sql = `INSERT INTO guardians (
      residentId,
      guardianSurname,
      guardianGivenName,
      guardianAddress,
      guardianPostcode,
      guardianMobile,
      guardianEmail,
      guardianRelationshipToGuest
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      req.body.residentId,
      req.body.guardianSurname,
      req.body.guardianGivenName,
      req.body.guardianAddress,
      req.body.guardianPostcode,
      req.body.guardianMobile,
      req.body.guardianEmail,
      req.body.guardianRelationshipToGuest,
    ];

    con.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error creating guardian:", err);
        return res
          .status(500)
          .json({ message: "Error creating guardian", error: err });
      }
      console.log(result);
      res
        .status(201)
        .json({ message: "Guardian created successfully", result });
    });
  },
};
