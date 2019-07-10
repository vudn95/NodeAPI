import { getAccount, login, register,checkEmail} from "./controller/account";
import { getProducts, getLengthProducts } from "./controller/product";
import { postOrder } from "./controller/postOrder";
import { insertProducts } from "./controller/insertProducts";
const middleware = require('../middleware');
const routes = (app) => {
    app.route('/account')
        .post(middleware.checkToken,getAccount);
    app.route('/login')
        .post(login);
    app.route('/existance')
        .post(checkEmail);
    app.route('/register')
        .post(register)
    app.route('/product')
        .get(getProducts);

    app.route('/product/length').get(getLengthProducts);
    app.route('/product/insert/:name&:color&:price').get(insertProducts);
    app.route("/order").post(middleware.checkToken,postOrder);

}
export default routes;