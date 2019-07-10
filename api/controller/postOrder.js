import db from "./../db";
export const postOrder = (req, res) => {
  let salad = req.body.ingredients.salad;
  let cheese = req.body.ingredients.cheese;
  let meat = req.body.ingredients.meat;
  let bacon = req.body.ingredients.bacon;
  let price = req.body.price;
  let id_customer = req.body.id_customer;
  let sql = `CALL addOrder (${id_customer},${salad},${cheese}, ${meat},${bacon}, ${price});`;
  db.query(sql, (err, response) => {
    console.log(sql);
    if (err) throw err;
    res.json(response);
  });
};
