import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import * as jwt from "jsonwebtoken";

const extractToken = (req: Request) => {
  const authorization = req.headers.authorization || ''
  return authorization.replace('Bearer ', '')
}

export default {
  validate(request: Request, response: Response, next: NextFunction) {
    const token = extractToken(request);

    if (!token)
      return response
        .status(401)
        .json({ auth: false, message: "No token provided." });
    try {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
      next();
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        return response
          .status(401)
          .json({ auth: false, message: "The session ended." });
      }
      return response
        .status(500)
        .json({ auth: false, message: "Failed to authenticate token." });
    }
  },
};