#!/bin/bash -ex

APP_NAME=admin-queries-cognito

npm install typescript
npm install & npm run build-prod
aws cloudformation deploy --template-file template.yml --stack-name ${APP_NAME} --parameter-overrides name=${APP_NAME}