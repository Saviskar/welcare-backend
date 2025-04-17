// Imports
import con from '../config/dbconnection'

// SQL statement to create the guardians table
const sql = `
  CREATE TABLE IF NOT EXISTS guardians (
    guardianId INT NOT NULL AUTO_INCREMENT,
    residentId INT NOT NULL,
    guardianSurname VARCHAR(100),
    guardianGivenName VARCHAR(100),
    guardianAddress VARCHAR(255),
    guardianPostcode VARCHAR(10),
    guardianMobile VARCHAR(20),
    guardianEmail VARCHAR(100),
    guardianRelationshipToGuest VARCHAR(100),
    PRIMARY KEY (guardianId),
    
    CONSTRAINT fk_resident_guardian FOREIGN KEY (residentId) 
    REFERENCES residents(residentId)
    ON DELETE CASCADE
  )
`;

// Run the query
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Guardians table created");
});
