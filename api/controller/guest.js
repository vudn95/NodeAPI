import db from './../db';

export const getGuests = (req, res) => {
    let sql = 'SELECT * FROM MyGuests'
    db.query(sql, (err, response) => {
        if (err) throw err
        res.status(400);
        res.json(response)
    })
}