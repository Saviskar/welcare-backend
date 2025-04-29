// Imports
import con from "../config/DBConnection.js";

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
con
  .execute(sql)
  .then(() => {
    console.log("Guardians table created");
  })
  .catch((err) => {
    if (err) throw err;
  });

export const findAll = async () => {
  const sql = `SELECT * FROM guardians`;

  const result = await con.execute(sql);
  console.log(result);
  return result[0];
};

export const findById = async (id) => {
  const sql = `SELECT * FROM guardians WHERE residentId = ?`;

  const result = await con.execute(sql, [id]);
  console.log(result);
  return result[0];
};

export const save = async (data) => {
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
    data.residentId,
    data.guardianSurname,
    data.guardianGivenName,
    data.guardianAddress,
    data.guardianPostcode,
    data.guardianMobile,
    data.guardianEmail,
    data.guardianRelationshipToGuest,
  ];

  const result = await con.execute(sql, values);
  console.log(result);
  return result;
};

export const update = async (id, data) => {
  const sql = `
    UPDATE guardians SET
      guardianSurname = ?,
      guardianGivenName = ?,
      guardianAddress = ?,
      guardianPostcode = ?,
      guardianMobile = ?,
      guardianEmail = ?,
      guardianRelationshipToGuest = ?
    WHERE residentId = ?`;

  const values = [
    data.guardianSurname,
    data.guardianGivenName,
    data.guardianAddress,
    data.guardianPostcode,
    data.guardianMobile,
    data.guardianEmail,
    data.guardianRelationshipToGuest,

    id,
  ];

  const result = await con.execute(sql, values);
  console.log(result);
  return result[0];
};

export const remove = async (id) => {
  const sql = `DELETE FROM guardians WHERE residentId = ?`;

  const result = await con.execute(sql, [id]);
  console.log(result);
  return result;
};
