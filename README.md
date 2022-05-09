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

[![loom video](https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/muhammedalibilgin/projects/36QJ334aQi6nGynPa-farm-management-with-cryptocurrency)](https://www.loom.com/share/dbd31c9365d749a1aaa5b06b793f8958)

---

# Usage

> -   **create a new order**

    near call $CONTRACT create '{"product":"egg", "unit":30}' --accountId YOUR_ACCOUNT_ID.testnet

    yarn dev

> -   **view order list**

    near view $CONTRACT get '{"offset":0}' --accountId YOUR_ACCOUNT_ID.testnet

> -   **update order**

    near call $CONTRACT update '{"id":SOME_ID_HERE, "updates":{"unit":U32} }' --accountId YOUR_ACCOUNT_ID.testnet

> -   **delete order**

    near call $CONTRACT del '{"id":SOME_ID_HERE }' --accountId YOUR_ACCOUNT_ID.testnet

---

<https://www.patika.dev/>
