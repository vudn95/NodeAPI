// import mysql from 'mysql';
import db from './../db';

export const getProducts = (req, res) => {
    let sql = 'SELECT * FROM products'
    db.query(sql, (err, response) => {
        if (err) throw err
        res.status(400);
        res.json(response)
    })
}