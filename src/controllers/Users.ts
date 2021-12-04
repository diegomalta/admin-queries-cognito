import {
  ProxyIntegrationEvent,
  ProxyIntegrationRoute
} from "aws-lambda-router/lib/proxyIntegration";
import { ApiGatewayManagementApi } from "aws-sdk";
import * as router from 'aws-lambda-router';
import { parseToken } from '../../common/parseToken';


const checkGroup = (request: ProxyIntegrationEvent<unknown>) => {
  const userInfo = parseToken(request.headers.Autorization.split(" ")[1]);
  console.log("USERINFO: \n" + JSON.stringify(userInfo, null, 2));
};

export const getUserList: ProxyIntegrationRoute["action"] = async (
  request,
  context
) => {
  checkGroup(request);

  return {
    statusCode: 200,
    body: `You called me with `,
  };
};

export const routes = [{
    path: '/users/list',
    method: 'GET',
    action: getUserList
}];
