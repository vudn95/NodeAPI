import db from '../db';
import {Product} from '../model/product';

export const getProducts = (req, res) => {
    Product.findAll().then(products => {
        res.json(products);
      });
}

export const getLengthProducts = (req , res) => {
    let sql = 'SELECT COUNT(id) FROM products'
    db.query(sql, (err, response) => {
        if(err) throw err
        res.json(response);
    })
}