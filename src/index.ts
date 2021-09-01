import * as router from 'aws-lambda-router';
import { ProxyIntegrationEvent } from 'aws-lambda-router/lib/proxyIntegration'
import * as userController from './controllers/Users';

export const handler = router.handler({
    proxyIntegration: {
        cors: true,
        routes: [{
            path: '/users/list',
            method: 'GET',
            action: (request: ProxyIntegrationEvent<{ text: string }>, context) => {
                return `You called me with: ${request.body.text}`
            }
        }]
    }
})