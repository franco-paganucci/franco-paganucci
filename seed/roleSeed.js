import { Role } from "../models/models.js";

async function roleSeed() {
  try {
    await Role.bulkCreate([
      {
        name: "ADMIN",        
        description: "Administrador del sistema", 
        deletedAt: null
      },
      {
        name: "EMPLOYEE",     
        description: "Empleado con permisos limitados", 
        deletedAt: null
      },
      {
        name: "CLIENT",       
        description: "Cliente con acceso básico", 
        deletedAt: null
      }
    ]);

    console.log('Roles insertados correctamente');
  } catch (error) {
    console.error("Error al insertar roles:", error);
  }
}

export default roleSeed;