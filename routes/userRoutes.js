import { Router } from "express";
import UserController from "../controllers/UserController.js";
import validateToken from "../middlewares/jwtGuard.js";
import adminOrEmployeesOnly from "../middlewares/adminOrEmployeesOnly.js";
import adminsOnly from "../middlewares/adminOnly.js";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/login", userController.userLogin);

userRoutes.get("/", validateToken, adminOrEmployeesOnly, userController.getAllUsers);
userRoutes.get("/:id", validateToken, adminOrEmployeesOnly, userController.getUserById);
userRoutes.post("/", /* validateToken, adminsOnly, */ userController.createUser);
userRoutes.put("/:id", validateToken, adminsOnly, userController.updateUser);
userRoutes.delete("/:id", validateToken, adminsOnly, userController.deleteUser);

export default userRoutes;