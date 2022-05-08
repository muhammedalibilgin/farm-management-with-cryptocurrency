// The entry file of your WebAssembly module.

import { Order, PartialOrder } from "./model";

export function add(a: i32, b: i32): i32 {
    return a + b;
}

export function create(product: string, unit: u32): Order {
    return Order.insert(product, unit);
}

export function getById(id: u32): Order {
    return Order.findById(id);
}

export function get(offset: u32, limit: u32 = 10): Order[] {
    return Order.find(offset, limit);
}

export function update(id: u32, updates: PartialOrder): Order {
    return Order.findByIdAndUpdate(id, updates);
}

export function del(id: u32): void {
    Order.findByIdAndDelete(id);
}
