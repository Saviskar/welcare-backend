// Imports
import con from '../config/dbconnection'

// SQL statement to create the users table
const sql = `
  CREATE TABLE IF NOT EXISTS users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    accounttype VARCHAR(50) NOT NULL
  )
`;

// Run the query
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Users table created");
});


export const getUsers = async () =>{
    const sql = `SELECT * FROM users`;
 
     await con.query(sql, (err, results) => {
       if (err) return console.log(`Error:${err}`);
       return results;
     });
}