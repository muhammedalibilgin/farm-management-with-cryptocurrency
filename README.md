# farm-management-with-cryptocurrency

Trading the goods produced on the farm and needed by the farm with cryptocurrency.

## Setup​ pre-requisites​:

1- npm
2- Near-cli
3- Make sure you have Node.js 14.16 installed, then use it to install yarn: npm install --global yarn (or just npm i -g yarn)

## Steps

    git clone https://github.com/muhammedalibilgin/farm-management-with-cryptocurrency.git
    cd farm-management-with-cryptocurrency
    yarn
    yarn build:release
    yarn deploy

![Contract id](https://patika-prod.s3-eu-central-1.amazonaws.com/content/courses/near-developer-course/lessons/example-crud-dApp/dpng-TxtuzaQZj8ubQnx7d)

    export CONTRACT=YOUR-CONTRACT-ID

    near call $CONTRACT create '{"product":"egg", "unit":30}' --accountId YOUR_ACCOUNT_ID.testnet

    yarn dev

    //Read List
    near view $CONTRACT get '{"offset":0}' --accountId YOUR_ACCOUNT_ID.testnet
