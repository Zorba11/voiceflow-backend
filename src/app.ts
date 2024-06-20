import express from "express";
import commandRoutes from "./routes/commandRoutes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON request bodies
app.use("/api", commandRoutes); // Use the command routes under /api

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
