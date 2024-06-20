// errorMiddleware.ts

import { Request, Response, NextFunction } from "express";

export default function errorMiddleware(
  err: { statusCode?: number; message?: string; stack?: string },
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  console.log("Error middleware:", message);

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
}
