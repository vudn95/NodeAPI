import {getProducts} from './controller/product';
const routes = (app) => {
    app.route('/product')
        .get(getProducts)

    app.route('/product/:id')
        .get(getItem);    
}
 
export default routes;