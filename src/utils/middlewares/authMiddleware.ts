import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  user?: any;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  try {
    req["user"] = token
    next();
  } catch (ex) {
    return res.status(400).send({ error: 'Invalid token.' });
  }

  
};

export default authMiddleware;