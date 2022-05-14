import { PersistentUnorderedMap, math, context, storage } from "near-sdk-as";

//Data storage
export const orders = new PersistentUnorderedMap<u32, Order>("o");

@nearBindgen
export class PartialOrder {
    unit: u32;
}

@nearBindgen
export class changeDone {
    done: bool;
}

@nearBindgen
export class Order {
    id: u32;
    product: string;
    unit: u32;
    done: bool;
    order_sender: string;

    constructor(product: string, unit: u32) {
        this.id = math.hash32<string>(product);
        this.product = product;
        this.done = false;
        this.unit = unit;
        this.order_sender = context.sender;
    }

    static insert(product: string, unit: u32): Order {
        //Create a new order
        const order = new Order(product, unit);

        orders.set(order.id, order);
        return order;
    }

    //Find from id
    static findById(id: u32): Order {
        return orders.getSome(id);
    }

    //Read list
    static find(offset: u32, limit: u32): Order[] {
        return orders.values(offset, offset + limit);
    }

    //Update unit in order if you want to change the number of orders
    static findByIdAndUpdate(id: u32, partial: PartialOrder): Order {
        //find order by id
        const order = this.findById(id);

        //update the order in memory
        order.unit = partial.unit;

        //updated order
        orders.set(id, order);

        return order;
    }

    //Delete Order
    static findByIdAndDelete(id: u32): void {
        orders.delete(id);
    }

    //Order Done, if the order has been sent
    static orderCompleted(id: u32, partial: changeDone): Order {
        //find order by id
        const order = this.findById(id);

        //update the order in memory
        order.done = partial.done;

        //updated order
        orders.set(id, order);

        return order;
    }
}
