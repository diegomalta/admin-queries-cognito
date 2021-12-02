import * as router from 'aws-lambda-router';
import * as userController from './controllers/Users';

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        routes: [{
            path: '/users/list',
            method: 'GET',
            action: (request, context) => {
                console.log(context.identity);
                console.log(context.authorizer);
                return `You called me`;
            }
        }]
    }
})