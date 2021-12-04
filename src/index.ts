import * as router from 'aws-lambda-router';
import * as userController from './controllers/Users';

import { parseToken } from '../common/parseToken';

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        // routes: controllerRoutes.reduce(reducer)
        // routes: userController.routes,
        routes: [{
            path: '/users/list',
            method: 'GET',
            action: (request, context) => {
                const userInfo = parseToken(request.headers.Autorization.split(" ")[1]);
                console.log("USERINFO: \n" + JSON.stringify(userInfo, null, 2));
                return `You called me with `;
            }
        }]
    }
})