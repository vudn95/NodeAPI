// import mysql from 'mysql';
import db from './../db';

export const getProducts = (req, res) => {
    let sql = 'SELECT * FROM products'
    db.query(sql, (err, response) => {
        if (err) throw err
        res.json(response)
    })
}

export const getItemProducts = (req, response) => {
	let sql =`SELECT * FROM products WHERE id=${req.params.id}`
    db.query(sql, (err, res) => {
        if(err) throw err
        response.json(res)
        })
}
