#!/usr/bin/env bash

[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1

echo ----------------------
echo checking order list
echo ----------------------

near view $CONTRACT get '{"offset":0}' --accountId $OWNER.testnet

echo ----------------------
echo checked list
echo ----------------------