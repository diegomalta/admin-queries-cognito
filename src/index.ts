import * as router from 'aws-lambda-router';
import * as userController from './controllers/Users';

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        routes: [{
            path: '/users/list',
            method: 'GET',
            action: (request, context) => {
                return `You called me`;
            }
        }]
    }
})