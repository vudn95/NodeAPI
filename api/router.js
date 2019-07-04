import { getProducts, getLengthProducts } from './controller/product';
import { insertProducts } from './controller/insertProducts';

const routes = (app) => {
    app.route('/product')
        .get(getProducts)

    app.route('/product/length').get(getLengthProducts)
    app.route('/product/insert/:name&:color&:price').get(insertProducts)
}
 
export default routes;