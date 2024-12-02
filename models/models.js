import Role from "./Role.js";
import User from "./User.js";

Role.hasMany(User, { foreignKey: "roleId", as: "users" });
User.belongsTo(Role, { foreignKey: "roleId", as: "role" });

export { User, Role }



