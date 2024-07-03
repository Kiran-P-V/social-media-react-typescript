// module imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";

// function import
import connectionToMongodb from "./db/db.config.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // for parsing the incoming requeset
app.use(cookieParser());

app.use("/api/auth/", authRoutes);
app.use("/api/message/", messageRoutes);
app.use("/api/users/", userRoutes);

app.listen(PORT, () => {
  connectionToMongodb();
  console.log(`Server running on port ${PORT}`);
});
