// Imports
import con from '../config/dbconnection.js';

// SQL statement to create the residents table
const sql = `
  CREATE TABLE IF NOT EXISTS residents (
    residentId INT AUTO_INCREMENT PRIMARY KEY,
    surname VARCHAR(100),
    givenName VARCHAR(100),
    preferredNames VARCHAR(100),
    age INT,
    maritalStatus VARCHAR(50),
    telephone VARCHAR(20),
    postCode VARCHAR(10),
    religion VARCHAR(100),
    countryOfBirth VARCHAR(100),
    preferredLanguage VARCHAR(100)
  )
`;

// Run the query
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Residents table created");
});


export const createResidents = (req, res) => {
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
      return results;
    });
};

export const getResidents = (req, res) => {
  const sql = "SELECT * FROM residents";

  con.query(sql, (err, results) => {
    if (err) return console.log(`Error: ${err}`);
    return results;
  });
};

export const getResidentById = (req, res) => {
  const sql = `SELECT * FROM residents WHERE residentId = ?`;
  const id = req.params.id;

  con.query(sql, [id], (err, results) => {
    if (err) return console.log(`Error: ${err}`);
    return results[0];
  });
};

export const deleteResident = (req, res) => {
  const sql = `DELETE FROM residents WHERE residentId = ?`;
  const id = req.params.id;

  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ message: "Error inside server" });
    return result;
  });
};