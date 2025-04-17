import con from '../config/dbconnection.js';

export const getUser = (req, res) => {
    const sql = `SELECT * FROM users`;

    con.query(sql, (err, results) => {
      if (err) return console.log(`Error:${err}`);
      return res.json(results);
    });
};
