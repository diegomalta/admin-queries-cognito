import * as router from 'aws-lambda-router';
import * as userController from './controllers/Users';

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        routes: [{
            path: '/users/list',
            method: 'GET',
            action: (request, context) => {
                console.log("REQUEST: \n" + JSON.stringify(request, null, 2));
                console.log("CONTEXT: \n" + JSON.stringify(context, null, 2));
                return `You called me with `;
            }
        }]
    }
})