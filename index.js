import express from "express";
import routes from "./routes/index.js";
import { notFound } from "./middlewares/notFound.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./config/config.js";


const app = express();
const port = SERVER_PORT || 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(notFound);

await connection.sync({ force: true });

app.listen(port, () => {
  console.log(`Games app listening on port ${port}`)
})