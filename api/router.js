import { getProducts, getLengthProducts } from './controller/product';
const routes = (app) => {
    app.route('/product')
        .get(getProducts)

    app.route('/product/length').get(getLengthProducts)
}
 
export default routes;