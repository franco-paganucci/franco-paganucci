import { User } from "../models/models.js";
import jwt from "jsonwebtoken";

class UserService {
  loginService = async (body) => {
    const { mail, password } = body;
    if (!mail || !password || mail.length < 1 || password.length < 1) {
      throw new Error("Email address and password are required.");
    }
  
    const userLogin = await User.findOne({ where: { mail } });
    if (!userLogin) {
      throw new Error("Invalid email or password.");
    }
  
    const comparePassword = await userLogin.compare(password);
    if (!comparePassword) {
      throw new Error("Invalid email or password.");
    }
    const token = jwt.sign(
      { id: userLogin.id, 
        roleId: userLogin.roleId, 
        userEmail: userLogin.mail 
      },
      process.env.JWT_SECRET,
      { expiresIn: "3h" }
    );
  
    return { user: { id: userLogin.id, mail: userLogin.mail, roleId: userLogin.roleId }, token };
  };
  

  getAllUsers = async () => {
    try {
      const users = await User.findAll({
        attributes: ["id","name", "mail", "address", "roleId"],
      });
      return users;
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      const user = await User.findOne({
        where: { id: id },
        attributes: ["name", "mail", "address", "roleId"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  };

  createUser = async (user) => {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  updateUser = async (data) => {
    try {
      const { id, name, password, email, address, roleId } = data;
      const updatedUser = await User.update(
        { name, password, email, address, roleId },
        { where: { id } }
      );
      return updatedUser;
    } catch (error) {
      throw error;
    }
  };

  deleteUser = async (id) => {
    try {
      const deletedUser = await User.destroy({
        where: { id: id },
      });
      if (deletedUser === 0) {
        throw new Error("User not found");
      }
      return { message: "User soft deleted successfully" };
    } catch (error) {
      throw error;
    }
  };
}

export default UserService;
