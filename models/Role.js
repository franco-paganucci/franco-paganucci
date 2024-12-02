import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {};

Role.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize: connection,
        modelName: "roles",
        paranoid: true, // Sequelize cuenta con su propio soft delete (built in)
        timestamps: true, 
    }
)

export default Role;