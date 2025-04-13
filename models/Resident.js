// Imports
const con = require("../config/dbconnection");

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
