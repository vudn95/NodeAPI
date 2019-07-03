import {getGuests} from './controller/guest';
import {getAccount} from './controller/account';
const routes = (app) => {
    app.route('/guest')
        .get(getGuests)
    app.route('/guest/:id')
        .get(getAccount)
}
 
export default routes;