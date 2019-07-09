import { checkUserValid, products } from './controller/product';
import { get_items, create_item,
    set_state_all_item, update_item, 
    delete_item, delete_follow_state, 
    get_categorys, create_list, get_lists, update_list,
    delete_list, get_list_quantity, reset_list_primary,
    get_info_account, set_selected_item, get_count_selected,
    set_selected_all_item,set_state_item_selected, delete_item_selected
    } from "./controller/items";

const routes = (app) => {
    app.route('/account').post(checkUserValid);
    app.route('/products').get(products);
    app.route('/get_items/:USER_ID&:LIST_ID').get(get_items)
    app.route('/create_item').post(create_item)
    app.route('/update_item').post(update_item)
    app.route('/delete_item').post(delete_item)
    app.route('/delete_all_item').post(delete_follow_state)
    app.route('/set_state_all_item').post(set_state_all_item)
    app.route('/get_categorys').get(get_categorys)
    app.route('/create_list').post(create_list);
    app.route('/get_lists/:USER_ID').get(get_lists);
    app.route('/update_list').post(update_list);
    app.route('/delete_list').post(delete_list);
    app.route('/get_list_quantity/:LIST_ID').get(get_list_quantity);
    app.route('/reset_list_primary').put(reset_list_primary);
    app.route('/get_info_account/:USER_ID').get(get_info_account);
    app.route('/set_selected_item').post(set_selected_item);
    app.route('/get_count_selected').post(get_count_selected);
    app.route('/set_selected_all_item').post(set_selected_all_item);
    app.route('/set_state_item_selected').post(set_state_item_selected);
    app.route('/delete_item_selected').post(delete_item_selected);
}
 
export default routes;