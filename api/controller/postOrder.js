import db from "./../db";
export const postOrder = (req, res) => {
    console.log(req.body);
  let salad = req.body.ingredients.salad;
  let cheese = req.body.ingredients.cheese;
  let meat = req.body.ingredients.meat;
  let bacon = req.body.ingredients.bacon;
  let price = req.body.price;
  let id_customer = req.body.customer.id;
  let sql = `call addOrder (${salad},
         ${cheese}, ${meat},
          ${bacon}, ${price},                                                           
          ,'${id_customer}');`;
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.json(response);
  });
};
