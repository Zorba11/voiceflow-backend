import express from "express";
import commandRoutes from "./routes/commandRoutes";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON request bodies
app.use("/api", commandRoutes); // Use the command routes under /api
// app.use("/api/transcribe", transcribeRouter);
// app.use("/api/navigate", navigateRouter);
// app.use("/api/extract-text", extractTextRouter);
// app.use("/api/text-to-speech", textToSpeechRouter);
// app.use("/api/analyze-page", analyzePageRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
