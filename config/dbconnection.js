// Imports
import mysql from "mysql2/promise";

// Create connection
try{
  const con = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pwd",
    database: "welcareDB",
  });  
} catch(e){
  console.log(e)
}

// Check if the connection is established
// con.connect(function (err) {
//   if (err){
//     console.log("Connection error")
//     throw err;
//   }
//   console.log("DB Connescted!");
// });

export default con;
