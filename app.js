import express from "express";
import connection from "./database/db.js";
import router from "./routes/main.route.js";
import { constants } from "./services/utils/constants.js";
import { not_found } from "./controllers/main.controller.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

await connection();

app.use("/api", router);

const { status } = constants.response;

app.get("*", not_found);

app.listen(port, () => console.log(`Server on port: ${port}`));
