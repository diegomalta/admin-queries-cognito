import { ProxyIntegrationEvent } from 'aws-lambda-router/lib/proxyIntegration'

export const getUserList = (request: ProxyIntegrationEvent<{ text: string }>, context) => {
    return {
        statusCode: 200,
        body: "message"
    }
}

export const getUserTest = (request: ProxyIntegrationEvent<{ text: string }>, context) => {
    return {
        statusCode: 200,
        body: "message test"
    }
}

export const routes = [
    {
        path: '/users/list',
        method: 'GET',
        action: (request: ProxyIntegrationEvent<{ text: string }>, context) => {
            return `You called me with: ${request.body.text}`
        }
    }
]