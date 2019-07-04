import {getGuests} from './controller/guest';
import {getAccount} from './controller/account';
import { getProducts, getLengthProducts } from './controller/product';
const routes = (app) => {
    app.route('/guest')
        .get(getGuests)
    app.route('/guest/:id')
        .get(getAccount)
        app.route('/product')
        .get(getProducts)

    app.route('/product/length').get(getLengthProducts)  
}
export default routes;