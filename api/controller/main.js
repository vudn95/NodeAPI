// import mysql from 'mysql';
import db from '../db';

export const getProducts = (req, res) => {
    let sql = 'SELECT * FROM Products'
    db.query(sql, (err, response) => {
        if (err) throw err
        // res.status(400);
        res.json(response)
    })
}

export const checkUserValid = (req , res) => {
    let USERNAME = req.body.USERNAME;
    let PASS = req.body.PASS;

    let sql = `SELECT * FROM Account WHERE USERNAME='${USERNAME}' AND '${PASS}'`
    db.query(sql, (err, response) => {
        if(err) throw err
        res.json(response);
    })
}