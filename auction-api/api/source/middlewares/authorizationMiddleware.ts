import getTokenFromAuthorizationHeader from "../utils/getTokenFromAuthorizationHeader";
import { config } from "../configuration/configuration";
import { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
export function validateToken(request: Request, response: Response, next: NextFunction) {

    const token = getTokenFromAuthorizationHeader(request)
     
    if (!token) return response.sendStatus(HttpStatusCode.Unauthorized);
  
    jwt.verify(token, config.tokenSecret, (err: any, payload: any) => {
        if (err) return response.sendStatus(HttpStatusCode.Forbidden);
        request.user = payload;
        next();
    });
}