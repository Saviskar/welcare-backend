// Imports
var mysql = require("mysql");

// Create connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "welcareDB",
});

// Check if the connection is established
con.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = con;
