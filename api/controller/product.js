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

export const getItem = (req, res) => {
    let sql = 'SELECT * FROM products WHERE id='
    db.query(`${sql}${req.params.id}`, (err, response) => {
        if (err) throw err
        res.status(400);
        res.json(response)
    })
}