import {getProducts, getItemProducts, getLengthProducts} from './controller/product';

const routes = (app) => {
    app.route('/product')
        .get(getProducts);

    app.route('/product/:id').get(getItemProducts);
    app.route('/product/length').get(getLengthProducts);
}
 
export default routes;
