import {getProducts, getItemProducts} from './controller/product';

const routes = (app) => {
    app.route('/product')
        .get(getProducts);

    app.route('/product/:id').get(getItemProducts);
}
 
export default routes;
