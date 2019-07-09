import db from '../db';

export const get_items = (req , res) => {
    let sql = `SELECT Item.* FROM 
    ((List INNER JOIN Account ON List.USER_ID=Account.USER_ID) 
    INNER JOIN Item ON List.LIST_ID=Item.LIST_ID) WHERE Account.USER_ID='${req.params.USER_ID}'
    AND List.LIST_ID='${req.params.LIST_ID}'`
    db.query(sql , (err, response) => {
        if (err) throw err;
        res.json(response);
    })
}

export const create_item = (req , res) => {
    let listID = req.body.LIST_ID;
    let itemName = req.body.ITEM_NAME;
    let itemPicture = req.body.ITEM_PICTURE;
    let itemNote = req.body.ITEM_NOTE;
    let categoryID = req.body.CATEGORY_ID;

    let sql = `CALL create_item('${listID}', '${itemName}', '${itemPicture}','${itemNote}', '${categoryID}');`
    db.query(sql , (err, response) => {
        if (err) throw err;
        res.json(response);
    })
}

export const update_item = (req , res) => {
    let name = req.body.ITEM_NAME;
    let quantity = req.body.ITEM_QUANTITY
    let note = req.body.ITEM_NOTE;
    let is_checked = req.body.IS_CHECKED;
    let item_id = req.body.ITEM_ID;

    let sql = `UPDATE Item SET ITEM_NAME='${name}' ,ITEM_QUANTITY=${quantity}, ITEM_NOTE='${note}', IS_CHECKED=${is_checked} WHERE ITEM_ID=${item_id}`;
    db.query(sql, (err , response ) => {
        if (err) throw err;
        res.json(response);
    })
}

export const delete_item = (req , res) => {
    let sql = `DELETE FROM Item WHERE ITEM_ID=${req.body.ITEM_ID}`
        db.query(sql, (err , response ) => {
        if (err) throw err;
        res.json(response);
    })
}

export const delete_follow_state = (req , res) => {
    let sql = `DELETE FROM Item WHERE IS_CHECKED=${req.body.IS_CHECKED}`
        db.query(sql, (err , response ) => {
        if (err) throw err;
        res.json(response);
    })
}

export const set_state_all_item = (req , res) => {
    let is_checked = req.body.IS_CHECKED;
    let sql = `UPDATE Item SET IS_CHECKED = ${is_checked}`
        db.query(sql, (err , response ) => {
        if (err) throw err;
        res.json(response);
    })
}

export const get_categorys = (req , res) => {
    let sql = `SELECT * FROM Category ORDER BY CATEGORY_NAME`
    db.query(sql , (err , response) => {
        if(err) throw err;
        res.json(response)
    })
}

export const create_list = (req, res) => {
    const sql = `INSERT INTO List (USER_ID, LIST_NAME, IS_PRIMARY)
            VALUES (${req.body.USER_ID}, '${req.body.LIST_NAME}', ${req.body.IS_PRIMARY} )`
    db.query(sql , (err, response) => {
        if(err) throw err;
        res.json(response.insertId);
    })
}

export const get_lists = (req, res) => {
    const sql = `SELECT * FROM List WHERE USER_ID=${req.params.USER_ID}`
    db.query(sql, (err, response)=>{
        if(err) throw err
        res.json(response);
    })
}

export const update_list = (req , res) => {
    const sql = `UPDATE List SET LIST_NAME='${req.body.LIST_NAME}', IS_PRIMARY=${req.body.IS_PRIMARY}
            WHERE LIST_ID=${req.body.LIST_ID}`;
    db.query(sql, (err, response) => {
        if(err) throw err;
        res.json(response);
    })
}

export const delete_list = (req, res) => {
    const sql = `DELETE FROM List WHERE LIST_ID=${req.body.LIST_ID}`
    db.query(sql , (err , response) => {
        if(err) throw err;
        res.json(response);
    })
}

export const get_list_quantity = (req, res) => {
    const sql = `SELECT COUNT(ITEM_ID) FROM Item WHERE LIST_ID=${req.params.LIST_ID}`
    db.query(sql, (err, response) => {
        if(err) throw err;
        res.json(response)
    })
}

export const reset_list_primary = (req , res) => {
    const sql = `UPDATE List SET IS_PRIMARY = false`
    db.query(sql, (err, response) => {
        if (err) throw err;
        res.json(response);
    })
}

export const get_info_account = (req, res) => {
    const sql = `SELECT * FROM Account WHERE USER_ID=${req.params.USER_ID}`
    db.query(sql, (err, response) => {
        res.json(response);
    })
}

export const set_selected_item = (req, res) => {
    const sql = `UPDATE Item SET IS_SELECTED = ${req.body.IS_SELECTED} 
        WHERE ITEM_ID=${req.body.ITEM_ID}`
    db.query(sql, (err, response) => {
        if(err) throw err;
        res.json(response);
    })
}

export const get_count_selected = (req , res) => {
    const sql = `SELECT COUNT(ITEM_ID) FROM Item WHERE IS_SELECTED=true 
    AND LIST_ID=${req.body.LIST_ID}`
    db.query(sql, (err, response) => {
        if (err) throw err
        res.json(response)
    })
}

export const set_selected_all_item = (req, res) => {
    const sql = `UPDATE Item SET IS_SELECTED=${req.body.IS_SELECTED}
            WHERE IS_CHECKED = ${req.body.IS_CHECKED}`;
    db.query(sql, (err, response)=>{
        if (err) throw err;
        res.json(response);
    })
}

export const set_state_item_selected = (req , res) => {
    let sql = `UPDATE Item SET IS_CHECKED = true WHERE IS_SELECTED=true`
        db.query(sql, (err , response ) => {
        if (err) throw err;
        res.json(response);
    })
}

export const delete_item_selected = (req , res) => {
    let sql = `DELETE FROM Item WHERE IS_SELECTED=true`
        db.query(sql, (err , response ) => {
        if (err) throw err;
        res.json(response);
    })
}