import db from '../db';

export const insertProducts = (req, res) => {
    let sql = `call create_product (${req.params.name}, ${req.params.color}, ${req.params.price});`
    db.query(sql, (err, response) => {
        if (err) throw err
        // res.status(400);
        res.json({name: req.params.name,color: req.params.color});
    })
}
