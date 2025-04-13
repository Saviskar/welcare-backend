const con = require("../config/dbconnection");

module.exports = {
  getFamilyContacts: (req, res) => {
    const sql = "SELECT * FROM resident_contacts";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },
};
