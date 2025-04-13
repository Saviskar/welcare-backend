const con = require("../config/dbconnection");

module.exports = {
  getResidents: (req, res) => {
    const sql = "SELECT * FROM residents";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },
};
