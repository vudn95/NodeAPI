import {getGuests} from './controller/guest';
const routes = (app) => {
    app.route('/guest')
        .get(getGuests)
}
 
export default routes;