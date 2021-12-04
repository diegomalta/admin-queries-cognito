import * as router from 'aws-lambda-router';
import * as userController from './controllers/Users';
import { parseToken } from '../common/parseToken';

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        routes: [{
            path: '/users/list',
            method: 'GET',
            action: (request, context) => {
                const tokenInfo = parseToken(request.headers.Authorization.split(' ')[1]);
                console.log("REQUEST: \n" + JSON.stringify(request, null, 2));
                console.log("TOKEN: \n" + JSON.stringify(tokenInfo, null, 2));

                return `You called me with `;
            }
        }]
    }
})