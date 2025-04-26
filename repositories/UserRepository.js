// Imports
import con from "../config/DBConnection.js";

// SQL statement to create the users table
const sql = `
  CREATE TABLE IF NOT EXISTS users (
    userId VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    accounttype VARCHAR(50) NOT NULL
  )
`;

// Run the query
con
  .execute(sql)
  .then(() => {
    // console.log("Users table created");
  })
  .catch(() => {
    if (err) throw err;
  });

export const findAll = async () => {
  const sql = `SELECT * FROM users`;

  const result = await con.execute(sql);

  console.log(result);
  return result[0];
};

export const findByIdAndPwd = async (id, pwd) => {
  const sql = `SELECT * FROM users where userid = ? AND password = ?`;

  const result = await con.execute(sql, [id, pwd]);

  return result[0][0];
};
