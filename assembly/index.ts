// The entry file of your WebAssembly module.

import { logging } from "near-sdk-core";
import { Order, PartialOrder } from "./model";

//irrelevant
// export function add(a: i32, b: i32): i32 {
//     return a + b;
// }

//near call $CONTRACT create '{"product":"some product","unit":how-much}' --accountId malibil.testnet (creating)
export function create(product: string, unit: u32): Order {
    assert(unit > 4, "At least 5 units can be ordered.");
    logging.log(`order successful=> ${product}`);
    return Order.insert(product, unit);
}

//near view $CONTRACT getById '{"id": 2097761562}'
export function getById(id: u32): Order {
    return Order.findById(id);
}

//near view $CONTRACT get '{"offset":0}' --accountId malibil.testnet (listing)
export function get(offset: u32, limit: u32 = 10): Order[] {
    return Order.find(offset, limit);
}

//near call $CONTRACT update '{"id":1507251732, "updates":{"unit":9} }' --accountId malibil.testnet(updating)
export function update(id: u32, updates: PartialOrder): Order {
    logging.log(`updated id=> ${id}`);
    return Order.findByIdAndUpdate(id, updates);
}

//near call $CONTRACT del '{"id":SOME_ID_HERE }' --accountId malibil.testnet (deleting)
export function del(id: u32): void {
    logging.log(`deleted id=> ${id}`);
    Order.findByIdAndDelete(id);
}
