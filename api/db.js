import mysql from 'mysql';
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "vudang95",
    database: process.env.DB_NAME || "nodejs_api"
})
export default db;