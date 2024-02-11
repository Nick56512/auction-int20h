import { NextFunction } from "express";

import jwt, {VerifyOptions} from 'jsonwebtoken';
import { Request,Response } from "express";
import { config } from "@module/configuration/configuration";

const authenticateToken = (req: Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
     
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token,config.tokenSecret, (err: any, payload: any) => {
      if (err) return res.sendStatus(403);
      req.user = payload;
      next();
    });
  };
  export default authenticateToken; 