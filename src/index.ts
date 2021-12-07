import * as router from 'aws-lambda-router';
import * as userController from './controllers/Users';

export const handler = router.handler({
    proxyIntegration: {
        //cors: true,
        routes: userController.routes
    }
})