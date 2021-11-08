import path from "path"
import express from "express";
require("dotenv").config({ path: path.join(__dirname, "../", ".env") });
import routes from "./routes";

let HOST: any = process.env.API_HOST;
let PORT: any = process.env.API_PORT;

//Creating Express Application ---

const app: express.Application = express();
app.use("/", routes);







//Running server ---

app.listen(PORT, HOST, () => {
    console.log(`Server running at ${HOST}:${PORT}`);
});