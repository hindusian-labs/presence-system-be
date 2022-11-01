import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routes from "./core/route";
import error from "./core/error";
dotenv.config();

const app: Express = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

const port = process.env.PORT;
export const server = app.listen(port, () => {
  console.log(`Server started at http://${process.env.HOSTNAME}:${port}`);
});
