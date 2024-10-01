import express from "express";



import authRoutes from "./src/routes/auth.route.js";
import { ENV_VARS } from "./src/config/envVars.js";
import { connectDB } from "./src/config/db.js";

const app = express();
const PORT = ENV_VARS.PORT
app.use(express.json());

app.use("/api/v1/auth", authRoutes)


app.listen(PORT, () => {
    console.log("Server started at http://localhost: "+ PORT);
    connectDB()
})