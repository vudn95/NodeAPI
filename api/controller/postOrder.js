import db from './../db';
export const postOrder =(req,res)=>{
    let sql = `call addOrder (${req.params.salad},
         ${req.params.cheese}, ${req.params.meat},
          ${req.params.bacon}, ${req.params.price},
          ${req.params.name}, ${req.params.email});`;
    db.query(sql,(err,response)=>{
        if(err) throw err
        res.json(response);
    })
    
}
