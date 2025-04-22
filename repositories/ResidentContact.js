// Imports
import con from "../config/DBConnection.js";

// SQL statement to create the residents table
const sql = `
  CREATE TABLE IF NOT EXISTS resident_contacts (
    contactId INT AUTO_INCREMENT PRIMARY KEY,
    residentId INT NOT NULL,
    
    -- First Contact
    firstContactSurname VARCHAR(100),
    firstContactGivenName VARCHAR(100),
    firstContactAddress VARCHAR(255),
    firstContactPostcode VARCHAR(10),
    firstContactTelephoneDaily VARCHAR(20),
    firstContactTelephoneAfterhours VARCHAR(20),
    firstContactRelationship VARCHAR(100),
    firstContactEmail VARCHAR(100),

    -- Second Contact
    secondContactSurname VARCHAR(100),
    secondContactGivenName VARCHAR(100),
    secondContactAddress VARCHAR(255),
    secondContactPostcode VARCHAR(10),
    secondContactTelephoneDaily VARCHAR(20),
    secondContactTelephoneAfterhours VARCHAR(20),
    secondContactRelationship VARCHAR(100),
    secondContactEmail VARCHAR(100),

    CONSTRAINT FK_Resident FOREIGN KEY (residentId) 
    REFERENCES residents(residentId)
    ON DELETE CASCADE
  )
`;

// Run the query
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Resident Contact table created");
});
