import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2/promise";

// console.log({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });

// Create connection
const con = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Check if the connection is established
con.connect(function (err) {
  if (err) {
    console.log("Connection error");
    throw err;
  }
  console.log("DB Connescted!");
  // console.log(process.env.DB_HOST);
});

export default con;

// workflow
// controllers -> service layer -> repository -> database
