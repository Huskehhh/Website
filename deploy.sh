#!/bin/bash

echo "Building..."
yarn build -g

echo "Packing build ready for deployment"
tar -cvf ./deploy.tar --exclude='*.map' ./captain-definition ./build/*

echo "Deploying..."
caprover deploy -t ./deploy.tar -a husk-pro

echo "Done! Cleaning up tar"

rm -rf deploy.tar
