import { getProducts, getLengthProducts } from './controller/product';
import { insertProducts } from './controller/insertProducts';
import { getGuests } from './controller/guest';
import { getAccount } from './controller/account';

const routes = (app) => {
    app.route('/guest')
        .get(getGuests)
    app.route('/guest/:id')
        .get(getAccount)
        app.route('/product')
        .get(getProducts)

    app.route('/product/length').get(getLengthProducts)
    app.route('/product/insert/:name&:color&:price').get(insertProducts)
}
export default routes;