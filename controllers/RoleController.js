import RoleService from "../services/RoleService.js";

class RoleController {
  roleService = new RoleService();

  getAllRoles = async (req, res) => {
    try {
      const data = await this.roleService.getAllRoles();
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.roleService.getRoleById(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createRole = async (req, res) => {
    try {
      const { name, description } = req.body;
      const data = await this.roleService.createRole({ name, description });
      res.status(201).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateRole = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const data = await this.roleService.updateRole({
        id,
        name,
        description,
      });
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRole = async (req, res) => {
    try {
      const { id } = req.params;
      const data = await this.roleService.deleteRole(id);
      res.status(200).send({ success: true, message: data });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RoleController;