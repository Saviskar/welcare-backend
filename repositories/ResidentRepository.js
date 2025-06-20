// Imports
import con from "../config/DBConnection.js";

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
    preferredLanguage VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

// Run the query
con
  .execute(sql)
  .then(() => {
    // console.log("Resdient table created");
  })
  .catch((err) => {
    if (err) throw err;
  });

export const save = async (data) => {
  const sql = `
      INSERT INTO residents (
        surname, givenName, preferredNames, age,
        maritalStatus, telephone, postCode,
        religion, countryOfBirth, preferredLanguage
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

  const values = [
    data.surname,
    data.givenName,
    data.preferredNames,
    data.age,
    data.maritalStatus,
    data.telephone,
    data.postCode,
    data.religion,
    data.countryOfBirth,
    data.preferredLanguage,
  ];

  const result = await con.execute(sql, values);
  return result;
};

export const findAll = async () => {
  const sql = "SELECT * FROM residents";

  const result = await con.execute(sql);
  return result;
};

export const findById = async (id) => {
  const sql = `SELECT * FROM residents WHERE residentId = ?`;

  const result = await con.execute(sql, [id]);
  console.log(result);
  return result[0];
};

export const update = async (id, data) => {
  const sql = `
    UPDATE residents SET
      surname = ?, givenName = ?, preferredNames = ?, age = ?,
      maritalStatus = ?, telephone = ?, postCode = ?,
      religion = ?, countryOfBirth = ?, preferredLanguage = ?
    WHERE residentId = ?
  `;

  const values = [
    data.surname,
    data.givenName,
    data.preferredNames,
    data.age,
    data.maritalStatus,
    data.telephone,
    data.postCode,
    data.religion,
    data.countryOfBirth,
    data.preferredLanguage,
    id,
  ];

  const result = await con.execute(sql, values);
  console.log(result);
  return result;
};

export const remove = async (id) => {
  const sql = `DELETE FROM residents WHERE residentId = ?`;

  const result = await con.execute(sql, [id]);
  console.log(result);
  return result;
};
