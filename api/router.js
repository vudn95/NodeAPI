import {getProducts} from './controller/product';
const routes = (app) => {
    app.route('/product')
        .get(getProducts)
}
 
export default routes;