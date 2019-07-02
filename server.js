import express from 'express';
import routes from './api/router';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json())
routes(app);
app.listen(3000)
console.log('app running on port ', 3000);