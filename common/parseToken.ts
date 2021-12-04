import jwt from 'jwt-simple';

export interface TokenResponse {
    "cognito:groups": string[],
    "email_verified": boolean,
    "cognito:username": string,
}

export const parseToken = (token: string): TokenResponse => {
    return jwt.decode(token, null, true);
}