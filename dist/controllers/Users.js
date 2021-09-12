"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.getUserTest = exports.getUserList = void 0;
const getUserList = (request, context) => {
    return {
        statusCode: 200,
        body: "message"
    };
};
exports.getUserList = getUserList;
const getUserTest = (request, context) => {
    return {
        statusCode: 200,
        body: "message test"
    };
};
exports.getUserTest = getUserTest;
exports.routes = [
    {
        path: '/users/list',
        method: 'GET',
        action: (request, context) => {
            return `You called me with: ${request.body.text}`;
        }
    }
];
