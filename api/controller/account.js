import db from "./../db";
const config = require("../../config");
let jwt = require('jsonwebtoken');
export const getAccount = (req, res) => {
  let email = req.body.email;
  let sql = `SELECT * from customer where email = '${email}'`;
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.status(200);
    res.json(response);
  });
};
export const login = (req, res) => {
  let email = req.body.email;
  let pass = req.body.pass;
  let sql = `SELECT * FROM customer WHERE email ='${email}' AND password='${pass}';`;
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.status(200);
    if (response.length) {
      let token = jwt.sign({ email: email }, config.myJWTSecretKey, {
        expiresIn: "24h"
      });
      res.json({
        success: true,
        message: "Authentication successful",
        token: token
      });
    } else {
      res.status(403);
      res.json({
        success: false,
        message: "Incorrect Email or Password"
      });
    }
  });
};
export const register = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let phone = req.body.phone;
  let address = req.body.address;
  let pass = req.body.pass;
  let sql = `INSERT INTO customer (email,PASSWORD,name,phone,address) VALUES ('${email}','${pass}','${name}','${phone}','${address}');`;
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.status(200);
    res.json(response);
  });
};
export const checkEmail = (req, res) => {
  let email = req.body.email;
  let sql = `SELECT * FROM customer WHERE email='${email}';`;
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.status(200);
    res.json(response);
  });
};
