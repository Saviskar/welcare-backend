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
con
  .execute(sql)
  .then(() => {
    console.log("ResidentContact table created");
  })
  .catch(() => {
    if (err) throw err;
  });

export const findAll = async () => {
  const sql = "SELECT * FROM resident_contacts";

  const result = await con.execute(sql);
  return result[0];
};

export const findById = async (id) => {
  const sql = "SELECT * FROM resident_contacts WHERE residentId = ?";

  const result = await con.execute(sql, [id]);
  return result[0];
};

export const update = async (id, data) => {
  const sql = `
    UPDATE resident_contacts SET 
      firstContactSurname = ?,
      firstContactGivenName = ?,
      firstContactAddress = ?,
      firstContactPostcode = ?,
      firstContactTelephoneDaily = ?,
      firstContactTelephoneAfterhours = ?,
      firstContactRelationship = ?,
      firstContactEmail = ?,
      
      secondContactSurname = ?,
      secondContactGivenName = ?,
      secondContactAddress = ?,
      secondContactPostcode = ?,
      secondContactTelephoneDaily = ?,
      secondContactTelephoneAfterhours = ?,
      secondContactRelationship = ?,
      secondContactEmail = ?
    WHERE residentId = ?
  `;

  const values = [
    data.firstContactSurname,
    data.firstContactGivenName,
    data.firstContactAddress,
    data.firstContactPostcode,
    data.firstContactTelephoneDaily,
    data.firstContactTelephoneAfterhours,
    data.firstContactRelationship,
    data.firstContactEmail,

    data.secondContactSurname,
    data.secondContactGivenName,
    data.secondContactAddress,
    data.secondContactPostcode,
    data.secondContactTelephoneDaily,
    data.secondContactTelephoneAfterhours,
    data.secondContactRelationship,
    data.secondContactEmail,

    id,
  ];

  const result = await con.execute(sql, values);
  console.log(result);
  return result;
};

export const remove = async (id) => {
  const sql = `DELETE FROM resident_contacts WHERE residentId = ?`;

  const result = con.execute(sql, [id]);
  console.log(result);
  return result;
};

export const save = async (data) => {
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
    data.residentId,

    data.firstContactSurname,
    data.firstContactGivenName,
    data.firstContactAddress,
    data.firstContactPostcode,
    data.firstContactTelephoneDaily,
    data.firstContactTelephoneAfterhours,
    data.firstContactRelationship,
    data.firstContactEmail,

    data.secondContactSurname,
    data.secondContactGivenName,
    data.secondContactAddress,
    data.secondContactPostcode,
    data.secondContactTelephoneDaily,
    data.secondContactTelephoneAfterhours,
    data.secondContactRelationship,
    data.secondContactEmail,
  ];

  const result = con.execute(sql, values);
  console.log(result);
  return result;
};
