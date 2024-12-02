import { Router } from "express";
import gameRoutes from "../routes/gameRoutes.js"
import saleRoutes from "../routes/saleRoutes.js"

const routes = Router();

routes.use("/games", gameRoutes);
routes.use("/sales", saleRoutes);

export default routes;
