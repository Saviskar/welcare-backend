const con = require("../config/dbconnection");

module.exports = {
  get: (req, res) => {
    const sql = `SELECT * FROM users`;

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error:${err}`);
      return res.json(results);
    });
  },
};
