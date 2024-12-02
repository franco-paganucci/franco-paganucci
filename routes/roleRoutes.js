import { Router } from "express";
import RoleController from "../controllers/RoleController.js";
import validateToken from "../middlewares/jwtGuard.js";
import adminsOnly from "../middlewares/adminOnly.js";

const roleRoutes = Router();

const roleController = new RoleController();

roleRoutes.get("/", validateToken, adminsOnly, roleController.getAllRoles);
roleRoutes.get("/:id", validateToken, adminsOnly, roleController.getUserById);
roleRoutes.post("/", validateToken, adminsOnly, roleController.createRole);
roleRoutes.put("/:id", validateToken, adminsOnly, roleController.updateRole);
roleRoutes.delete("/:id", validateToken, adminsOnly, roleController.deleteRole);

export default roleRoutes;
