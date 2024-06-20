import express, { Request, Response } from "express";
import commandController from "../controllers/commandController";

const router = express.Router();

router.get("/process-command", commandController.processCommand);

export default router;
