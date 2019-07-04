import db from "./../db";

export const getAccount = (req, res) => {
  let id = req.params.id;
  // let sql=`SELECT * from MyGuests where Id=${id}`;
  let sql = "SELECT * from MyGuests where Id = ?";
  db.query(sql, id, (err, response) => {
    if (err) throw err;
    res.status(200);
    res.json(response);
  });
};
