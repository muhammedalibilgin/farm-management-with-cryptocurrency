#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$PRODUCT" ] && echo "Missing \$PRODUCT environment variable" && exit 1
[ -z "$UNIT" ] && echo "Missing \$UNIT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1



echo
echo 'About to call create() on the contract'
echo near call \$CONTRACT create '{"product":\$PRODUCT, "unit"\$UNIT:}' --accountId \$OWNER.testnet
echo
echo --------------------------------
echo \$CONTRACT is $CONTRACT
echo \$PRODUCT is $PRODUCT
echo \$UNIT is $UNIT
echo \$OWNER is $OWNER
echo --------------------------------
echo
echo "Creating Order..."
echo
near call $CONTRACT create '{"product":"'"$PRODUCT"'", "unit":'$UNIT'}' --accountId $OWNER.testnet