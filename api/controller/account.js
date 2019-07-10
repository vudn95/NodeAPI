import db from "./../db";

export const getAccount = (req, res) => {
  let id = req.params.id;
  // let sql=`SELECT * from MyGuests where Id=${id}`;
  let sql = "SELECT * from customer where id_customer = ?";
  db.query(sql, id, (err, response) => {
    if (err) throw err;
    res.status(200);
    res.json(response);
  });
};
export const checkAccount = (req, res) =>{
  let email = req.body.email;
  let pass = req.body.pass;
  let sql = `SELECT * FROM customer WHERE email ='${email}' AND password='${pass}';`;
  db.query(sql,(err,response)=> {
    if(err) throw err;
    res.status(200);
    res.json(response);
  })
};
export const addAccount = (req, res) =>{
  console.log(req);
  let email = req.body.email;
  let name = req.body.name;
  let phone = req.body.phone;
  let address = req.body.address;
  let pass = req.body.pass;
  let sql = `INSERT INTO customer (email,PASSWORD,name,phone,address) VALUES ('${email}','${pass}','${name}','${phone}','${address}');`;
  db.query(sql,(err,response)=> {
    if(err) throw err;
    res.status(200);
    res.json(response);
  })
};
export const checkEmail = (req,res)=>{
  let email = req.body.email;
  let sql = `SELECT * FROM customer WHERE email='${email}';`;
  db.query(sql, (err, response)=>{
    if (err) throw err;
    res.status(200);
    res.json(response);
  })
}
