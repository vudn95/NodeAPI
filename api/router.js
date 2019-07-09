import { getGuests } from "./controller/guest";
import { getAccount, checkAccount, addAccount,checkEmail} from "./controller/account";
import { getProducts, getLengthProducts } from "./controller/product";
import { postOrder } from "./controller/postOrder";
import { insertProducts } from "./controller/insertProducts";
const routes = (app) => {
    app.route('/guest')
        .get(getGuests);
    app.route('/account/:id')
        .get(getAccount);
    app.route('/account')
        .post(checkAccount);
    app.route('/existance')
        .post(checkEmail);
    app.route('/register')
        .post(addAccount)
    app.route('/product')
        .get(getProducts);

    app.route('/product/length').get(getLengthProducts);
    app.route('/product/insert/:name&:color&:price').get(insertProducts);
    app.route("/order").post(postOrder);

}
export default routes;