import {
  ProxyIntegrationEvent,
  ProxyIntegrationRoute,
} from "aws-lambda-router/lib/proxyIntegration";
import { parseToken } from "../common/parseToken";
import { CognitoIdentityServiceProvider } from "aws-sdk";

const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const userPoolId = process.env.USERPOOL;

const checkGroup = (request: ProxyIntegrationEvent<unknown>) => {
  const userInfo = parseToken(request.headers.Authorization.split(" ")[1]);
  console.log("USERINFO: \n" + JSON.stringify(userInfo, null, 2));
};

export const getUserList: ProxyIntegrationRoute["action"] = async (
  request,
  context
) => {
  checkGroup(request);

  const params = {
    UserPoolId: userPoolId,
  };

  try {
    const result = await cognitoIdentityServiceProvider
      .listUsers(params)
      .promise();
    console.log(JSON.stringify(result, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: "error getting cognito users",
    };
  }
};

export const routes = [
  {
    path: "/users/list",
    method: "GET",
    action: getUserList,
  },
];
