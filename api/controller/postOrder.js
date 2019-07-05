import db from "./../db";
export const postOrder = (req, res) => {
    console.log(req.body);
  var salad = req.body.ingredients.salad;
  var cheese = req.body.ingredients.cheese;
  var meat = req.body.ingredients.meat;
  var bacon = req.body.ingredients.bacon;
  var price = req.body.price;
  var name = req.body.customer.name;
  var email = req.body.customer.email;
  let sql = `call addOrder (${salad},
         ${cheese}, ${meat},
          ${bacon}, ${price},                                                           
          '${name}','${email}');`;
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.json(response);
  });
};
