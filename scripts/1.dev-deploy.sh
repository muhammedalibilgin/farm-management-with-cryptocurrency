#!/usr/bin/env bash


echo --------------------------------------------
echo
echo "rebuilding the contract (release build)"
echo
yarn build:release

echo --------------------------------------------
echo
echo "redeploying the contract"
echo
yarn deploy

echo --------------------------------------------
echo run the following commands
echo
echo 'export CONTRACT=<dev-123-456>'
echo 'near call $CONTRACT create '{"product":"some_product", "unit":"u32"}' --accountId YOUR_ACCOUNT_ID.testnet'
echo
echo

exit 0