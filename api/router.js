import {getGuests} from './controller/guest';
import {getAccount} from './controller/account';
import {getProducts, getLengthProducts } from './controller/product';
import {postOrder} from './controller/postOrder';
const routes = (app) => {
    app.route('/guest')
        .get(getGuests)
    app.route('/guest/:id')
        .get(getAccount)
    app.route('/product')
    .get(getProducts)
    app.route('/order/:salad&:cheese&:meat&:bacon&:price&:name&:email')
        .get(postOrder)
    app.route('/product/length').get(getLengthProducts)  
}
export default routes;