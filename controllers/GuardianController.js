const con = require("../config/dbconnection");

module.exports = {
  getGuardians: (req, res) => {
    const sql = "SELECT * FROM guardians";

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error: ${err}`);
      return res.json(results);
    });
  },
};
