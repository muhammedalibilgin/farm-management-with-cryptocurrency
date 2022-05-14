# farm-management-with-cryptocurrency

Trading the goods produced on the farm and needed by the farm with cryptocurrency. Our farm receives orders via cryptocurrency.

## Setup​ pre-requisites​:

1. npm
2. Near-cli
3. Make sure you have Node.js 14.16 installed, then use it to install yarn: npm install --global yarn (or just npm i -g yarn)

## Steps

    git clone https://github.com/muhammedalibilgin/farm-management-with-cryptocurrency.git
    cd farm-management-with-cryptocurrency
    yarn
    login near
    yarn build:release
    yarn deploy

![Contract id](https://patika-prod.s3-eu-central-1.amazonaws.com/content/courses/near-developer-course/lessons/example-crud-dApp/dpng-TxtuzaQZj8ubQnx7d)

    export CONTRACT=YOUR-CONTRACT-ID

---

> **loom video**

You can access the video from the link below.

[![loom video](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcp7mu45C_kbp41MmhGKM_imB2VcIKcAnXaHohJtfXq77uoEMxfVdx0klpg93G9dpHVTY&usqp=CAU)](https://www.loom.com/share/521abcf1c87549d2a99c37d91d8022f5)

---

# Functions

We have 6 functions.

| Function  | What does it do?                                                       |
| --------- | ---------------------------------------------------------------------- |
| create    | Used to create a new order. Takes 2 arguments; product and unit.       |
| getById   | The order is tracked with the id. Takes one argument; id.              |
| get       | The order list is fully traceable but at intervals of 10.              |
| update    | The unit of ordered products can be updated. Takes one argument; unit. |
| del       | The order is deleted. Takes one argument; id.                          |
| orderDone | It is updated whether the order has been completed or not.             |

---

# Usage

> -   **create a new order**

For example creating an order of 40 apples.

    near call $CONTRACT create '{"product":"some_product", "unit":number}' --accountId YOUR_ACCOUNT_ID.testnet

![Create a new order](./figures/create_order.png)

> -   **view order list**

Let's view our apple order with the orders created for testing purposes before.

    near view $CONTRACT get '{"offset":0}' --accountId YOUR_ACCOUNT_ID.testnet

![View order list](./figures/view_order_list.png)

> -   **update order**

Let's update our apple order number from 40 to 45.

    near call $CONTRACT update '{"id":SOME_ID_HERE, "updates":{"unit":U32} }' --accountId YOUR_ACCOUNT_ID.testnet

![Update order list](./figures/update_order.png)

> -   **delete order**

And finally we can delete the apple order we added.

    near call $CONTRACT del '{"id":SOME_ID_HERE }' --accountId YOUR_ACCOUNT_ID.testnet

![Delete order list](./figures/delete_order.png)

---

<https://www.patika.dev/>
