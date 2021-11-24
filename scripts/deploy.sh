#!/bin/bash -ex

APP_NAME=admin-queries-cognito

npm install typescript
npm install & npm run build-prod
aws cloudformation package --template-file template.yml --output-template-file api/transformed.yml --s3-bucket ${AWS_ACCOUNT_ID}-code-storage
aws cloudformation deploy --template-file api/transformed.yml --stack-name ${APP_NAME} --parameter-overrides name=${APP_NAME} --capabilities CAPABILITY_IAM