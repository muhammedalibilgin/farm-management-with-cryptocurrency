// The entry file of your WebAssembly module.

import { logging } from "near-sdk-core";
import { Order, PartialOrder } from "./model";

//irrelevant
// export function add(a: i32, b: i32): i32 {
//     return a + b;
// }

//near call $CONTRACT create '{"product":"some product","unit":how-much}' --accountId malibil.testnet
export function create(product: string, unit: u32): Order {
    return Order.insert(product, unit);
}

export function getById(id: u32): Order {
    return Order.findById(id);
}

//near view $CONTRACT get '{"offset":0}' --accountId malibil.testnet
export function get(offset: u32, limit: u32 = 10): Order[] {
    return Order.find(offset, limit);
}

//near call $CONTRACT update '{"id":1507251732, "updates":{"unit":9} }' --accountId malibil.testnet
export function update(id: u32, updates: PartialOrder): Order {
    logging.log(`updated id=> ${id}`);
    return Order.findByIdAndUpdate(id, updates);
}

//near view $CONTRACT get '{"offset":0}' --accountId malibil.testnet
export function del(id: u32): void {
    logging.log(`deleted id=> ${id}`);
    Order.findByIdAndDelete(id);
}
