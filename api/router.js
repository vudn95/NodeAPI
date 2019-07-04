import { getGuests } from "./controller/guest";
import { getAccount } from "./controller/account";
import { getProducts, getLengthProducts } from "./controller/product";
import { postOrder } from "./controller/postOrder";
import { insertProducts } from "./controller/insertProducts";

const routes = app => {
  app.route("/guest").get(getGuests);
  app.route("/guest/:id").get(getAccount);
  app.route("/product").get(getProducts);
  app.route("/order").post(postOrder);
  app.route("/product/length").get(getLengthProducts);
  app.route("/product/insert/:name&:color&:price").get(insertProducts);
};
export default routes;