// ===================================================
// Temp Roles Model
// ===================================================

// Import Sequelize
import Sequelize from "sequelize";

// Attributes
const temp_roles = {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  UserID: {
    type: Sequelize.STRING,
  },
  RoleID: {
    type: Sequelize.STRING,
  },
  TimeAdd: {
    type: Sequelize.DATE,
  },
  TimeLease: {
    type: Sequelize.DATE,
  },
};

// Model Temp_Roles
const temp_roles_model = { name: "temp_roles", model: temp_roles };

// Export Model
export default temp_roles_model;
