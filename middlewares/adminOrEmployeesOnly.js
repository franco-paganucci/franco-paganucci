import RoleService from "../services/RoleService.js";

const adminOrEmployeesOnly = async (req, res, next) => {
  const roleService = new RoleService();
  try {
    const role = await roleService.getRoleById(req.user.roleId);

    if (role.name !== "ADMIN" && role.name !== "EMPLOYEE") {
      return res.status(403).json({ message: "Access denied. Admins or employees only." });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Server error while fetching role." });
  }
};

export default adminOrEmployeesOnly;
