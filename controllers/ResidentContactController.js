const con = require("../config/dbconnection");

module.exports = {
  getFamilyContacts: (req, res) => {
    const sql = "SELECT * FROM resident_contacts";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },

  // have to use this controller logic in the routes
  // getFamilyContactsById: (req, res) => {
  //   const residentId = req.params.id;
  //   const sql = "SELECT * FROM resident_contacts WHERE residentId = ?";

  //   con.query(sql, residentId, (err, results) => {
  //     if (err) {
  //       console.error("Database error:", err);
  //       return res
  //         .status(500)
  //         .json({ message: "Error retrieving data", error: err.message });
  //     }

  //     if (results.length === 0) {
  //       return res.status(404).json({
  //         message: "No family contacts found for the given resident ID",
  //       });
  //     }

  //     return res.json(results[0]);
  //   });
  // },

  readFamilyContacts: (req, res) => {
    const sql = `SELECT * FROM resident_contacts WHERE residentId = ?`;
    const id = req.params.id;

    con.query(sql, [id], (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },

  createFamilyContacts: (req, res) => {
    const sql = `
    INSERT INTO resident_contacts (
      residentId,
      firstContactSurname,
      firstContactGivenName,
      firstContactAddress,
      firstContactPostcode,
      firstContactTelephoneDaily,
      firstContactTelephoneAfterhours,
      firstContactRelationship,
      firstContactEmail,

      secondContactSurname,
      secondContactGivenName,
      secondContactAddress,
      secondContactPostcode,
      secondContactTelephoneDaily,
      secondContactTelephoneAfterhours,
      secondContactRelationship,
      secondContactEmail
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    const values = [
      req.body.residentId,

      req.body.firstContactSurname,
      req.body.firstContactGivenName,
      req.body.firstContactAddress,
      req.body.firstContactPostcode,
      req.body.firstContactTelephoneDaily,
      req.body.firstContactTelephoneAfterhours,
      req.body.firstContactRelationship,
      req.body.firstContactEmail,

      req.body.secondContactSurname,
      req.body.secondContactGivenName,
      req.body.secondContactAddress,
      req.body.secondContactPostcode,
      req.body.secondContactTelephoneDaily,
      req.body.secondContactTelephoneAfterhours,
      req.body.secondContactRelationship,
      req.body.secondContactEmail,
    ];

    con.query(sql, values, (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({
          message: "Error creating family contacts",
          error: err.message,
        });
      }
      return res.status(201).json({
        message: "Family contacts created successfully",
        insertId: results.insertId,
      });
    });
  },
};
