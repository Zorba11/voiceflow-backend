import express, { Request, Response } from "express";

const router = express.Router();

router.get("/process-command", (req: Request, res: Response) => {
  // Process the command and generate actions
  // const actions = processCommand(req.body.command);

  const actions = {
    type: "message",
    message: "Hello, world!",
  };

  console.log("Command received:", req.body.command);

  // Return the actions
  res.send(actions).status(200);
});

export default router;
