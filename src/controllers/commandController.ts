import { NextFunction, Request, Response } from "express";
// import commandService from "../services/commandService";

const processCommand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    // console.error("Error processing command:", error);
    // res.status(500).json({ error: "Internal Server Error" });

    next(error);
  }
};

export default { processCommand };
