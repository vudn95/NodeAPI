import db from './../db';

export const getGuests = (req, res) => {
    let sql = 'SELECT * FROM MyGuests'
    db.query(sql, (err, response) => {
        if (err) throw err
        res.status(400);
        res.json(response)
    })
}

export const getLengthProducts = (req , res) => {
    let sql = 'SELECT COUNT(id) FROM Products'
    db.query(sql, (err, response) => {
        if(err) throw err
        res.json(response);
    })
}