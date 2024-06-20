import { NextFunction, Request, Response } from "express";
// import commandService from "../services/commandService";

const processCommand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { command, screenshotInfo } = req.body;
    // const actions = await commandService.generateActions(
    //   command,
    //   screenshotInfo
    // );

    const actions = {
      type: "message",
      message: "Hello, world!",
    };

    console.log("Processed command controller:", actions);

    throw new Error("This is an error");

    res.json({ actions });
  } catch (error) {
    // console.error("Error processing command:", error);
    // res.status(500).json({ error: "Internal Server Error" });

    next(error);
  }
};

export default { processCommand };
