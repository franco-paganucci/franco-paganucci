import User from "../models/User.js";

async function userSeed() {
  try {

    await User.bulkCreate([
      {
        name: "Andy",
        mail: "andy@mail.com",
        password: "password123",
        address: "123 Calle Falsa, Ciudad, País",
        // roleId: 2 // EMPLOYEE (roleId = 2)
      },
      {
        name: "Andy",
        mail: "andres@mail.com",
        password: "password123",
        address: "123 Calle Falsa, Ciudad, País",
        // roleId: 3 // CLIENT (roleId = 3)
      },
      {
        name: "Andy",
        mail: "cliente@mail.com",
        password: "password123",
        address: "123 Calle Falsa, Ciudad, País",
        // roleId: 3 // CLIENT (roleId = 3)
      },
      {
        name: "Francisco",
        mail: "francisco@mail.com",
        password: "password456",
        address: "456 Avenida Real, Ciudad, País",
        // roleId: 1, // ADMIN (roleId = 1)
      },
      {
        name: "Franco",
        mail: "franco@mail.com",
        password: "password789", 
        address: "789 Camino Antiguo, Ciudad, País",
        // roleId: 1, // ADMIN (roleId = 1)
      }
    ], {
      individualHooks: true 
    });

    console.log('Usuarios insertados correctamente');
  } catch (error) {
    console.error("Error al insertar usuarios:", error);
  }
}

export default userSeed;
